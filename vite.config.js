import { resolve } from 'path';

import { defineConfig } from 'vite';
import pluginVue from '@vitejs/plugin-vue';

import { dirApp } from './lib/global/dir.js';


export default defineConfig({
	plugins: [
		pluginVue({
			template: {
				compilerOptions: {
					isCustomElement: tag => /^((module-|comp-|p-).+?|module)$/.test(tag)
				}
			}
		}),
	],
	root: resolve(dirApp, 'app'),
	base: './',
	build: {
		outDir: resolve(dirApp, 'dist'),
		emptyOutDir: true,
		chunkSizeWarningLimit: 1024,
		// minify: false
	},
	publicDir: resolve(dirApp, 'app', 'public'),
	clearScreen: false,
	server: {
		port: 4763,
	}
});
