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
  const ANCHOR_POS = new Vector3(0, 45, 0);
  const ZERO = new Vector3(0, 0, 0);
  const Z_AXIS = new Vector3(0, 0, 1);
  export function init() {
    const anchorMaterial = new MeshStandardMaterial({ color: 0xff0000 });
    const ballMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
    const anchor = new PhysicsMesh(RigidBodyType.Fixed, new SphereGeometry(0.5), anchorMaterial)
      .setPosition(ANCHOR_POS.x, ANCHOR_POS.y, ANCHOR_POS.z)
      .addToWorld(world, scene);
    const movingBall1 = new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(2), ballMaterial)
      .setPosition(ball1Pos.x, ball1Pos.y, ball1Pos.z)
      .setDensity(mass1)
      .setDamping(damping)
      .addToWorld(world, scene);
    const movingBall2 = new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(2), ballMaterial)
      .setPosition(ball2Pos.x, ball2Pos.y, ball2Pos.z)
      .setDensity(mass2)
      .setVelocity(initialVelocity, 0, 0)
      .setDamping(damping)
      .addToWorld(world, scene);
    const jointParams1 = JointData.revolute(ZERO, ANCHOR_POS.clone().sub(ball1Pos), Z_AXIS);
    world.createImpulseJoint(jointParams1, anchor.rigidBody, movingBall1.rigidBody, false);
    const jointParams2 = JointData.revolute(ZERO, ball1Pos.clone().sub(ball2Pos), Z_AXIS);
    world.createImpulseJoint(jointParams2, movingBall1.rigidBody, movingBall2.rigidBody, false);
    scene.add(new LineConnector([anchor, movingBall1, movingBall2], 0x000000));
  }
  let length1 = 15,
    length2 = 10;
  let mass1 = 1,
    mass2 = 1;
  let initialVelocity = 10;
  let damping = 0;
  $: ball1Pos = new Vector3(0, 45 - length1, 0);
  $: ball2Pos = new Vector3(0, 45 - length1 - length2, 0);
</script>

<SimpleGrid cols={3}>
  <label for="length1">擺長1</label>
  <input id="length1" type="range" min="4" max="20" step="0.5" name="length1" bind:value={length1} />
  {length1}
  <label for="length2">擺長2</label>
  <input id="length2" type="range" min="4" max="20" step="0.5" name="length2" bind:value={length2} />
  {length2}
  <label for="mass1">擺重1</label>
  <input id="mass1" type="range" min="0.2" max="5" step="0.1" name="mass1" bind:value={mass1} />
  {mass1}
  <label for="mass2">擺重2</label>
  <input id="mass2" type="range" min="0.2" max="5" step="0.1" name="mass2" bind:value={mass2} />
  {mass2}
  <label for="initialVelocity">初始速度</label>
  <input id="initialVelocity" type="range" min="2" max="25" step="0.5" name="initialVelocity" bind:value={initialVelocity} />
  {initialVelocity}
  <label for="damping">阻力</label>
  <input id="damping" type="range" min="0" max="0.4" step="0.05" name="damping" bind:value={damping} />
  {damping}
</SimpleGrid>
