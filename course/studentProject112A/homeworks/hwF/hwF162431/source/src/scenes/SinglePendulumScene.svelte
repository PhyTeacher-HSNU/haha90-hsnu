<script lang="ts">
  import { JointData, RigidBodyType, World } from '@dimforge/rapier3d-compat';
  import { SimpleGrid } from '@svelteuidev/core';
  import { MeshStandardMaterial, PerspectiveCamera, Scene, SphereGeometry, Vector3 } from 'three';
  import { LineConnector } from '../shared/LineConnector';
  import { PhysicsMesh } from '../shared/PhysicsMesh';

  //export let t: number;
  export let t: number;
  export let world: World;
  export let scene: Scene;
  export let camera: PerspectiveCamera;
  t;
  camera;
  const ANCHOR_POS = new Vector3(0, 30, 0);
  const ZERO = new Vector3(0, 0, 0);
  const Z_AXIS = new Vector3(0, 0, 1);
  export function init() {
    const anchorMaterial = new MeshStandardMaterial({ color: 0xff0000 });
    const ballMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
    const anchor = new PhysicsMesh(RigidBodyType.Fixed, new SphereGeometry(0.5), anchorMaterial)
      .setPosition(ANCHOR_POS.x, ANCHOR_POS.y, ANCHOR_POS.z)
      .addToWorld(world, scene);
    const movingBall = new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(2), ballMaterial)
      .setPosition(ANCHOR_POS.x, ANCHOR_POS.y - length, ANCHOR_POS.z)
      .setVelocity(initialVelocity, 0, 0)
      .setDamping(damping)
      .addToWorld(world, scene);
    const jointParams = JointData.revolute(ZERO, ANCHOR_POS.clone().sub(ballPos), Z_AXIS);
    world.createImpulseJoint(jointParams, anchor.rigidBody, movingBall.rigidBody, false);
    scene.add(new LineConnector([anchor, movingBall], 0x000000));
  }
  let length = 15;
  let initialVelocity = 10;
  let damping = 0;
  $: ballPos = new Vector3(0, 30 - length, 0);
</script>

<SimpleGrid cols={3}>
  <label for="length">擺長</label>
  <input id="length" type="range" min="4" max="20" step="0.5" name="length" bind:value={length} />
  {length}
  <label for="initialVelocity">初始速度</label>
  <input id="initialVelocity" type="range" min="2" max="15" step="0.5" name="initialVelocity" bind:value={initialVelocity} />
  {initialVelocity}
  <label for="damping">阻力</label>
  <input id="damping" type="range" min="0" max="0.4" step="0.05" name="damping" bind:value={damping} />
  {damping}
</SimpleGrid>
