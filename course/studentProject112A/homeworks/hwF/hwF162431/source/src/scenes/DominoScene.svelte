<script lang="ts">
  import { RigidBodyType, World } from '@dimforge/rapier3d-compat';
  import { SimpleGrid } from '@svelteuidev/core';
  import { BoxGeometry, CylinderGeometry, MeshStandardMaterial, PerspectiveCamera, Scene, Vector3 } from 'three';
  import { PhysicsMesh } from '../shared/PhysicsMesh';

  export let t: number;
  export let world: World;
  export let scene: Scene;
  export let camera: PerspectiveCamera;
  camera;
  t;

  const HEIGHT = 10;
  const WIDTH = 1;
  const DEPTH = 4;
  let hittingCylinder: PhysicsMesh;
  const materials = [
    new MeshStandardMaterial({ color: 0xff0000 }),
    new MeshStandardMaterial({ color: 0x00ff00 }),
    new MeshStandardMaterial({ color: 0x0000ff }),
    new MeshStandardMaterial({ color: 0xffff00 }),
    new MeshStandardMaterial({ color: 0x00ffff }),
    new MeshStandardMaterial({ color: 0xff00ff }),
  ];
  function domino(pos: Vector3, rot: number) {
    return new PhysicsMesh(RigidBodyType.Dynamic, new BoxGeometry(WIDTH, HEIGHT, DEPTH), materials[Math.floor(Math.random() * materials.length)])
      .setPosition(pos.x, pos.y, pos.z)
      .setRotation(0, -rot, 0)
      .setFriction(0.25)
      .setRestitution(0.1)
      .addToWorld(world, scene);
  }
  export function init() {
    hittingCylinder = new PhysicsMesh(
      RigidBodyType.KinematicVelocityBased,
      new CylinderGeometry(0.5, 0.5, 10),
      new MeshStandardMaterial({ color: 0xffffff })
    )
      .setPosition(-40, HEIGHT - 2, 30)
      .setRotation(Math.PI / 2, 0, Math.PI / 2)
      .addToWorld(world, scene);
    hittingCylinder.rigidBody.setLinvel({ x: 20, y: 0, z: 0 }, true);
    let position = new Vector3(-30, HEIGHT / 2, 30);
    let rotation = 0;
    domino(position, rotation);
    forward(gap);
    function forward(length: number) {
      position.x += Math.cos(rotation) * length;
      position.z += Math.sin(rotation) * length;
    }
    function turn(angle: number) {
      rotation += angle;
    }
    const deg180 = Math.PI;
    const turnSteps = Math.floor(50 / gap);
    const turnAngle = deg180 / turnSteps;
    let counter = 0;
    outer: while (position.z > -50 && counter < 200) {
      if (position.x > 40 - (turnSteps * gap) / 5) {
        for (let i = 0; i < turnSteps; i++) {
          turn(-turnAngle);
          domino(position, rotation);
          counter++;
          forward(gap);
          if (position.z < -50) {
            break outer;
          }
        }
        domino(position, rotation);
        counter++;
        forward(gap);
      } else if (position.x < -40 + (turnSteps * gap) / 5) {
        for (let i = 0; i < turnSteps; i++) {
          turn(turnAngle);
          domino(position, rotation);
          counter++;
          forward(gap);
          if (position.z < -50) {
            break outer;
          }
        }
        domino(position, rotation);
        counter++;
        forward(gap);
      } else {
        domino(position, rotation);
        counter++;
        forward(gap);
      }
    }
  }
  export function tick() {
    if (hittingCylinder.rigidBody.translation().x > -35) {
      hittingCylinder.rigidBody.setLinvel({ x: 0, y: 0, z: 0 }, true);
    }
  }
  let gap = 5;
</script>

<SimpleGrid cols={3}>
  <label for="gap">骨牌間距</label>
  <input id="gap" type="range" min="1.5" max="6.5" step="0.1" name="gap" bind:value={gap} />
  {gap}</SimpleGrid
>
