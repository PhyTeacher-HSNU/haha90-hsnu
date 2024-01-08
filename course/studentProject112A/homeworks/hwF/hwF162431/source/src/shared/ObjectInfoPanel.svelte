<script lang="ts">
  import { clickoutside } from '@svelteuidev/composables';
  import { Popper } from '@svelteuidev/core';
  import { afterUpdate, createEventDispatcher } from 'svelte';
  import { Vector3 } from 'three';
  import type { PhysicsMesh } from './PhysicsMesh';

  export let obj: PhysicsMesh;
  export let x: number;
  export let y: number;

  afterUpdate(() => {
    anchor.style.left = `${x}px`;
    anchor.style.top = `${y}px`;
  });
  export function tick() {
    anchor.style.left = `${x}px`;
    anchor.style.top = `${y}px`;
    if (!obj.rigidBody) return;
    mass = obj.rigidBody.mass();
    velocity = new Vector3().copy(obj.rigidBody.linvel() as any).length();
    angVelocity = new Vector3().copy(obj.rigidBody.angvel() as any).length();
  }
  const dispatch = createEventDispatcher();

  let anchor: HTMLDivElement;
  let mass: number = 0;
  let velocity: number = 0;
  let angVelocity: number = 0;
</script>

<div bind:this={anchor} class="anchor"></div>
<Popper mounted={true} reference={anchor} position="left">
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
  <div
    use:clickoutside={{ enabled: true, callback: () => dispatch('close') }}
    style="padding: 5px; background-color: var(--svelteui-colors-dark500); border-radius:2px"
    on:click|stopPropagation
  >
    <div>物體資訊</div>
    <div>質量: {mass.toFixed(2)}</div>
    <div>速率: {velocity.toFixed(2)}</div>
    <div>角速率: {angVelocity.toFixed(2)}</div>
  </div>
</Popper>

<style>
  .anchor {
    position: absolute;
  }
</style>
