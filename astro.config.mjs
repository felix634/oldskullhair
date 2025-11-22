import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // <-- This should be the ONLY tailwind related import

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});