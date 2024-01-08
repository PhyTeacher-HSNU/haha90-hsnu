import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const singleFile = false;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: singleFile ? [svelte(), viteSingleFile()] : [svelte()],
  build: singleFile
    ? {
        assetsInlineLimit: Infinity,
      }
    : {},
});
