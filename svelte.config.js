import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
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
            fallback: 'fallback.html' // may differ from host to host
        }),
        paths: {
            // assets: '/icon-socle-web2',
            // relocation not needed when github pages are exposed  on a sub domain like https://deeplo.vboof.fr
            // base: dev ? undefined : "/deezer-artist-playlist-organizer",
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // ignore deliberate link to shiny 404 page
                if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
                    return;
                }

                console.error({path, referrer, message})
                // otherwise fail the build
                throw new Error(message);
            }
        }
    }
};

export default config;
