<script lang="ts">
  import { RigidBodyType, World } from '@dimforge/rapier3d-compat';
  import { SimpleGrid } from '@svelteuidev/core';
  import { MeshStandardMaterial, PerspectiveCamera, Scene, SphereGeometry } from 'three';
  import { PhysicsMesh } from '../shared/PhysicsMesh';

  export let t: number;
  export let world: World;
  export let scene: Scene;
  export let camera: PerspectiveCamera;
  camera;
  t;

  export function init() {
    new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(Math.cbrt(mass1)), new MeshStandardMaterial({ color: 0xff0000 }))
      .setPosition(0.05, 25, 0)
      .setRestitution(0.9)
      .addToWorld(world, scene);
    new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(Math.cbrt(mass2)), new MeshStandardMaterial({ color: 0x00ff00 }))
      .setPosition(0, 20, 0)
      .setRestitution(0.9)
      .addToWorld(world, scene);
    new PhysicsMesh(RigidBodyType.Dynamic, new SphereGeometry(Math.cbrt(mass3)), new MeshStandardMaterial({ color: 0x0000ff }))
      .setPosition(-0.05, 15, 0)
      .setRestitution(0.9)
      .addToWorld(world, scene);
  }
  let mass1 = 1,
    mass2 = 3,
    mass3 = 5;
</script>

<SimpleGrid cols={3}>
  <label for="mass1">上方球質量</label>
  <input id="mass1" type="range" min="0.2" max="10" step="0.1" name="mass1" bind:value={mass1} />
  {mass1}
  <label for="mass2">中間球質量</label>
  <input id="mass2" type="range" min="0.2" max="10" step="0.1" name="mass2" bind:value={mass2} />
  {mass2}
  <label for="mass3">下方球質量</label>
  <input id="mass3" type="range" min="0.2" max="10" step="0.1" name="mass3" bind:value={mass3} />
  {mass3}
</SimpleGrid>
