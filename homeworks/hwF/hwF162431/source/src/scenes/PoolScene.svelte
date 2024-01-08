<script lang="ts">
  import { RigidBodyType, World } from '@dimforge/rapier3d-compat';
  import { SimpleGrid } from '@svelteuidev/core';
  import { CylinderGeometry, MeshStandardMaterial, PerspectiveCamera, Scene, SphereGeometry } from 'three';
  import { PhysicsMesh } from '../shared/PhysicsMesh';

  export let t: number;
  export let world: World;
  export let scene: Scene;
  export let camera: PerspectiveCamera;
  camera;
  t;

  const RADIUS = 1.5;
  let ball1: PhysicsMesh;
  let hittingCylinder: PhysicsMesh;
  export function init() {
    hittingCylinder = new PhysicsMesh(
      RigidBodyType.KinematicVelocityBased,
      new CylinderGeometry(RADIUS / 2, RADIUS / 2, 10),
      new MeshStandardMaterial({ color: 0xffffff })
    )
      .setPosition(0, RADIUS, 45)
      .setRotation(Math.PI / 2, 0, 0)
      .addToWorld(world, scene);
    hittingCylinder.rigidBody.setLinvel({ x: 0, y: 0, z: -cylinderVelocity }, true);
    ball1 = new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(RADIUS), new MeshStandardMaterial({ color: 0xffffff }))
      .setFriction(friction)
      .setRestitution(restitution)
      .setPosition(0, RADIUS, 30)
      .addToWorld(world, scene);
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < i + 1; j++) {
        new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(RADIUS), new MeshStandardMaterial({ color: colors[i] }))
          .setPosition((j - i / 2) * 2 * RADIUS, RADIUS, 5 - (i * 2 * RADIUS * Math.sqrt(3)) / 2)
          .setFriction(friction)
          .setRestitution(restitution)
          .addToWorld(world, scene);
      }
    }
  }
  export function tick() {
    if (hittingCylinder.rigidBody.translation().z < 35) {
      hittingCylinder.rigidBody.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }
  }
  let cylinderVelocity = 40;
  let friction = 0.25;
  let restitution = 1;
</script>

<SimpleGrid cols={3}>
  <label for="cylinderVelocity">撞擊力道</label>
  <input id="cylinderVelocity" type="range" min="5" max="60" step="0.05" name="cylinderVelocity" bind:value={cylinderVelocity} />
  {cylinderVelocity}
  <label for="friction">摩擦力係數</label>
  <input id="friction" type="range" min="0" max="1" step="0.05" name="friction" bind:value={friction} />
  {friction}
  <label for="restitution">彈性係數</label>
  <input id="restitution" type="range" min="0" max="1" step="0.05" name="restitution" bind:value={restitution} />
  {restitution}
</SimpleGrid>
