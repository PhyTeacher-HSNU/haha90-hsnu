/// <reference types="svelte" />
/// <reference types="vite/client" />
declare module 'svelte-icons/md/*.svelte' {
  import { SvelteComponentTyped } from 'svelte';
  export default class extends SvelteComponentTyped<{}, {}, {}> {}
}
