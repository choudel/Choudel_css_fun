import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/variables.scss";'
					}
				}
			}
		}
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@import "src/variables.scss";'
			}
		})
	]
};

export default config;
