<script lang="ts">
  import RAPIER, { CoefficientCombineRule } from '@dimforge/rapier3d-compat';
  import { Button, Center, Loader, NativeSelect, SimpleGrid, Space, SvelteUIProvider, Text } from '@svelteuidev/core';
  import Stats from 'stats.js';
  import { SvelteComponent, afterUpdate, onMount } from 'svelte';
  import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
  import MdKeyboardArrowRight from 'svelte-icons/md/MdKeyboardArrowRight.svelte';
  import MdPause from 'svelte-icons/md/MdPause.svelte';
  import MdPlayArrow from 'svelte-icons/md/MdPlayArrow.svelte';
  import MdRefresh from 'svelte-icons/md/MdRefresh.svelte';
  import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { clearScene, setupBaseScene } from './scene';
  import DominoScene from './scenes/DominoScene.svelte';
  import DoublePendulumScene from './scenes/DoublePendulumScene.svelte';
  import GalileanCannonScene from './scenes/GalileanCannonScene.svelte';
  import JengaTowerScene from './scenes/JengaTowerScene.svelte';
  import NewtonCradleScene from './scenes/NewtonCradleScene.svelte';
  import PoolScene from './scenes/PoolScene.svelte';
  import SinglePendulumScene from './scenes/SinglePendulumScene.svelte';
  import ObjectInfoPanel from './shared/ObjectInfoPanel.svelte';
  import { PhysicsMesh } from './shared/PhysicsMesh';
  import { getMouseOverObject } from './shared/utils';

  const SCENES = {
    jengaTower: JengaTowerScene,
    galileanCannon: GalileanCannonScene,
    pool: PoolScene,
    domino: DominoScene,
    singlePendulum: SinglePendulumScene,
    doublePendulum: DoublePendulumScene,
    newtonCradle: NewtonCradleScene,
  };
  const SCENE_NAMES = [
    { value: 'jengaTower', label: '疊疊樂', desc: '請點擊場景中方塊將其移除' },
    { value: 'galileanCannon', label: '三球堆疊炮', desc: '' },
    {
      value: 'pool',
      label: '撞球',
      desc: '',
    },
    {
      value: 'domino',
      label: '多米諾骨牌',
      desc: '',
    },
    {
      value: 'singlePendulum',
      label: '單擺',
      desc: '',
    },
    {
      value: 'doublePendulum',
      label: '雙擺',
      desc: '',
    },
    {
      value: 'newtonCradle',
      label: '牛頓擺',
      desc: '',
    },
  ];

  let canvas: HTMLCanvasElement;
  let initPromise: Promise<void>;
  let scene: Scene;
  let camera: PerspectiveCamera;
  let renderer: WebGLRenderer;
  let controls: OrbitControls;
  async function init() {
    scene = new Scene();
    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new WebGLRenderer({ antialias: true, canvas });
    //renderer.shadowMap.enabled = true;
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0.1, 0);
    camera.position.set(0, 20, 50);
    controls.update();
    handleResize();
    await RAPIER.init();
    // world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  }
  let stats: Stats;
  onMount(() => {
    initPromise = init();
    initPromise.then(() => {
      changeScene('jengaTower');
      setInterval(tick, 1000 / 60);
    });
    stats = new Stats();
    stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
  });
  function handleResize() {
    renderer.setSize(window.innerWidth, window.innerHeight, true);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  function tick() {
    stats.begin();
    controls.update();
    renderer.render(scene, camera);
    if (playing) {
      sceneComponentInstance?.tick?.();
      // debugger;
      tickPhysics();
      if (infoPanelComponent) {
        infoPanelComponent.tick();
      }
    }
    stats.end();
  }
  function tickPhysics() {
    //console.log('tick physics', dt)
    const targetTimeStep = (1 / 60) * dt;
    world.timestep = 0.95 * world.timestep + 0.05 * targetTimeStep;
    //console.log(world.step)
    for (let i = 0; i < stepsPerFrame; i++) {
      world.step();
    }
    t += world.timestep;
  }
  function changeScene(newSceneName: keyof typeof SCENES) {
    console.log('change scene', newSceneName);
    t = 0;
    if (world) {
      infoObj = null;
      world.free();
    }
    clearScene(scene);
    setupBaseScene(scene);
    world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(50, 2, 50)
        .setFrictionCombineRule(CoefficientCombineRule.Max)
        .setRestitutionCombineRule(CoefficientCombineRule.Max)
        .setTranslation(0, -2, 0)
    );
    world.timestep = (1 / 60) * dt;
    selectedSceneName = newSceneName;
    sceneInit = false;
  }
  let sceneInit = false;
  afterUpdate(() => {
    if (sceneComponentInstance && !sceneInit) {
      sceneComponentInstance.init();
      sceneInit = true;
    }
  });
  function handleRefresh(e: CustomEvent) {
    e.stopPropagation();
    changeScene(selectedSceneName);
  }
  function handleSingleStep(e: CustomEvent) {
    e.stopPropagation();
    tickPhysics();
    playing = false;
  }
  function handleSceneSelection(e: CustomEvent) {
    e.stopPropagation();
    changeScene(SCENE_NAMES[(e.target as any).selectedIndex].value as any);
  }

  let world: RAPIER.World;
  let selectedSceneName: keyof typeof SCENES;
  $: SceneComponent = SCENES[selectedSceneName] as typeof SvelteComponent;
  let sceneComponentInstance: SvelteComponent;
  let t = 0;
  let dt = 0.5;
  let stepsPerFrame = 2;
  let playing = true;
  let controlsOpen = true;

  let infoObj: PhysicsMesh | null = null;
  let infoPanelX = 0;
  let infoPanelY = 0;
  let infoPanelComponent: ObjectInfoPanel;
  function handleContextMenu(e: MouseEvent) {
    const obj = getMouseOverObject(e, scene, camera);
    if (obj instanceof PhysicsMesh) {
      console.log('open obj info panel', obj);
      openObjInfoPanel(obj, e.clientX, e.clientY);
    }
  }
  function openObjInfoPanel(obj: PhysicsMesh, x: number, y: number) {
    infoObj = obj;
    infoPanelX = x;
    infoPanelY = y;
  }
  function closeObjInfoPanel() {
    infoObj = null;
  }
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={'dark'}>
  <canvas bind:this={canvas}></canvas>
  {#await initPromise}
    <Center override={{ height: '100vh' }}>
      <Loader /><Text size="lg">Rapier物理引擎載入中</Text>
    </Center>
  {:then}
    <!-- scene controls-->
    <h1 id="title"><Center>162431賴境鎰 期末專題</Center></h1>
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
    <div id="scene-control" on:click|stopPropagation>
      <div>
        <SimpleGrid override={{ display: 'inline-grid', 'grid-template-columns': '4rem 8rem 1rem' }}>
          <label for="dt">dt</label>
          <input id="dt" type="range" min="0.05" max="5" step="0.05" name="dt" bind:value={dt} />
          <span>{dt}</span>
          <label for="steps">每幀步數</label>
          <input id="steps" type="range" min="1" max="16" step="1" name="steps" bind:value={stepsPerFrame} />
          <span>{stepsPerFrame}</span>
        </SimpleGrid>
        <Button variant="outline" compact override={{ float: 'right' }} on:click={handleRefresh}>
          <span class="icon-large">
            <MdRefresh />
          </span>
        </Button>
        <Button variant="outline" compact override={{ float: 'right' }} on:click={handleSingleStep}>步進</Button>
        <Button
          variant="outline"
          compact
          override={{ float: 'right', 'padding-right': '0px' }}
          on:click={(e) => {
            e.stopPropagation();
            playing = !playing;
          }}
        >
          <span class="icon-large" slot="leftIcon">
            {#if playing}
              <MdPause />
            {:else}
              <MdPlayArrow />
            {/if}
          </span>
          {''}
        </Button>
      </div>
      <Space h="md" />
      <div>
        <NativeSelect label="場景" data={SCENE_NAMES} bind:value={selectedSceneName} on:change={handleSceneSelection} />
      </div>
      <Space h="md" />
      <div>{SCENE_NAMES.find((s) => s.value === selectedSceneName)?.desc}</div>
      <div>可右鍵點擊物體查看資訊</div>
      <Space h="md" />
      <div role="button" tabindex="0" on:click={() => (controlsOpen = !controlsOpen)} on:keydown={() => (controlsOpen = !controlsOpen)}>
        <span class="icon">
          {#if controlsOpen}
            <MdKeyboardArrowDown />
          {:else}
            <MdKeyboardArrowRight />
          {/if}
        </span>
        <span>場景設定(需重置)</span>
      </div>
      <Space h="md" />
      <div class={controlsOpen ? '' : 'hidden'}>
        <svelte:component this={SceneComponent} bind:this={sceneComponentInstance} {t} {world} {scene} {camera} />
      </div>
    </div>
    {#if infoObj}
      <ObjectInfoPanel bind:this={infoPanelComponent} obj={infoObj} x={infoPanelX} y={infoPanelY} on:close={closeObjInfoPanel}></ObjectInfoPanel>
    {/if}
  {:catch error}
    <Center override={{ height: '100vh' }}>
      <Text size="lg" color="red">Rapier物理引擎載入失敗: {error.message}</Text>
    </Center>
  {/await}
</SvelteUIProvider>
<svelte:window on:resize={handleResize} on:contextmenu|preventDefault={handleContextMenu} />

<style>
  #title {
    width: 100%;
    position: absolute;
    top: 0;
    color: black;
  }
  #scene-control {
    /*font-size: 1.2em;*/
    position: absolute;
    width: max(15rem, 33%);
    top: 5px;
    right: 5px;
    padding: 5px;
    z-index: 100;
    background-color: var(--svelteui-colors-dark600);
  }
  #dt {
    margin-bottom: 1em;
  }
  .hidden {
    display: none;
  }
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
  }
  .icon-large {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
  }
</style>
