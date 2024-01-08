<script lang="ts">
  import { JointData, RevoluteImpulseJoint, RigidBodyType, World } from '@dimforge/rapier3d-compat';
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
  const ANCHOR_Y = 30;
  const ZERO = new Vector3(0, 0, 0);
  const Z_AXIS = new Vector3(0, 0, 1);
  export function init() {
    for (let i = 0; i < pendulumCount; i++) {
      const x = -(pendulumCount * 2) + i * 4.025;
      const anchorMaterial = new MeshStandardMaterial({ color: 0xff0000 });
      const ballMaterial = new MeshStandardMaterial({ color: 0x00ff00 });
      const anchor = new PhysicsMesh(RigidBodyType.Fixed, new SphereGeometry(0.5), anchorMaterial)
        .setPosition(x, ANCHOR_Y, 0)
        .addToWorld(world, scene);
      const movingBall = new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(2), ballMaterial)
        .setPosition(x, ANCHOR_Y - length, 0)
        .setVelocity(i === pendulumCount - 1 ? initialVelocity : 0, 0, 0)
        .setRestitution(1)
        .addToWorld(world, scene);
      const jointParams = JointData.revolute(ZERO, new Vector3(0, length, 0), Z_AXIS);
      const joint = world.createImpulseJoint(jointParams, anchor.rigidBody, movingBall.rigidBody, false);
      if (i !== 0 && i !== pendulumCount - 1) {
        (joint as RevoluteImpulseJoint).configureMotorPosition(0, 100, 100);
      }
      scene.add(new LineConnector([anchor, movingBall], 0x000000));
    }
  }
  let pendulumCount = 3;
  let length = 15;
  let initialVelocity = 10;
</script>

<SimpleGrid cols={3}>
  <label for="pendulumCount">擺錘數量</label>
  <input id="pendulumCount" type="range" min="2" max="6" step="1" name="pendulumCount" bind:value={pendulumCount} />
  {pendulumCount}
  <label for="length">擺長</label>
  <input id="length" type="range" min="4" max="20" step="0.5" name="length" bind:value={length} />
  {length}
  <label for="initialVelocity">初始速度</label>
  <input id="initialVelocity" type="range" min="2" max="15" step="0.5" name="initialVelocity" bind:value={initialVelocity} />
  {initialVelocity}
</SimpleGrid>
