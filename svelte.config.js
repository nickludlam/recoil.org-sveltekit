import { vitePreprocess } from "@sveltejs/kit/vite";

// Default setup is to use auto
// import adapter from "@sveltejs/adapter-auto";

// We want to use static site generation
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    // adapter: adapter(),

    // This is the static generation config, from https://kit.svelte.dev/docs/adapter-static
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'build',
        assets: 'build',
        fallback: undefined, // or  fallback: '200.html' // may differ from host to host, see https://kit.svelte.dev/docs/single-page-apps
        precompress: false,
        strict: true
      })

  },

  preprocess: [vitePreprocess({})],
};

export default config;
