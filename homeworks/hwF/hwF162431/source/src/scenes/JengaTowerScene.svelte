<script lang="ts">
  import { RigidBodyType, World } from '@dimforge/rapier3d-compat';
  import { SimpleGrid } from '@svelteuidev/core';
  import { BoxGeometry, MeshStandardMaterial, PerspectiveCamera, Scene, TextureLoader } from 'three';
  import WOOD_TEXTURE from '../assets/wood.jpg';
  import { PhysicsMesh } from '../shared/PhysicsMesh';
  import { getMouseOverObject } from '../shared/utils';

  //export let t: number;
  export let t: number;
  export let world: World;
  export let scene: Scene;
  export let camera: PerspectiveCamera;
  t;
  //const objects: PhysicsMesh[] = [];
  export function init() {
    const texture = new TextureLoader().load(WOOD_TEXTURE);
    for (let i = 0; i < 20; i++) {
      if (i % 2 === 0) {
        for (let j = -1; j <= 1; j++) {
          const material = new MeshStandardMaterial({ map: texture });
          new PhysicsMesh(RigidBodyType.Dynamic, new BoxGeometry(15, 2.5, 4), material)
            .setPosition(Math.random(), 1.25 + i * 2.5, j * 5 + Math.random())
            .setRestitution(restitution)
            .setFriction(friction)
            .addToWorld(world, scene);
        }
      } else {
        for (let j = -1; j <= 1; j++) {
          const material = new MeshStandardMaterial({ map: texture });
          new PhysicsMesh(RigidBodyType.Dynamic, new BoxGeometry(4, 2.5, 15), material)
            .setPosition(j * 5 + Math.random(), 1.25 + i * 2.5, Math.random())
            .setRestitution(restitution)
            .setFriction(friction)
            .addToWorld(world, scene);
        }
      }
    }
  }
  function handleClick(event: MouseEvent) {
    const obj = getMouseOverObject(event, scene, camera);
    if (obj instanceof PhysicsMesh) {
      obj.removeFromWorld(world, scene);
    }
  }
  let mouseOverObj: PhysicsMesh | null;
  function handlePointerMove(event: PointerEvent) {
    const obj = getMouseOverObject(event, scene, camera);
    if (mouseOverObj) {
      (mouseOverObj.material as any).color.set(0x80ffffff);
    }
    if (obj instanceof PhysicsMesh) {
      (obj.material as any).color.set(0xff0000);
      mouseOverObj = obj;
    }
  }
  let friction = 0.25;
  let restitution = 0.5;
</script>

<SimpleGrid cols={3}>
  <label for="friction">摩擦力係數</label>
  <input id="friction" type="range" min="0" max="1" step="0.05" name="friction" bind:value={friction} />
  {friction}
  <label for="restitution">彈性係數</label>
  <input id="restitution" type="range" min="0" max="1" step="0.05" name="restitution" bind:value={restitution} />
  {restitution}
</SimpleGrid>
<svelte:window on:click={handleClick} on:pointermove={handlePointerMove} />
