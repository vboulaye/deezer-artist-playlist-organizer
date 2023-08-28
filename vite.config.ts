import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import Icons from 'unplugin-icons/vite'
export default defineConfig({
	plugins: [sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true,
		})
		, purgeCss({
			// safelist: {
				// any selectors that begin with "hljs-" will not be purged
				// greedy: [/^hljs-/],
			// },
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		headers: {
			"ngrok-skip-browser-warning": "true"
		}
	}
});
