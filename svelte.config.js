import {dev} from "$app/environment";
import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/kit/vite';
const dev = process.env.NODE_ENV !== 'production'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [vitePreprocess({})],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            fallback: 'index.html' // may differ from host to host
        }),
        paths: {
            // assets: '/icon-socle-web2',
            base: dev ? undefined : "/deezer-artist-playlist-organizer",
        },
    }
};

export default config;
