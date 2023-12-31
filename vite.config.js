import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import pluginVue from '@vitejs/plugin-vue';



process.env.NENV_PKG_PATH = import.meta.url;
process.env.NENV_PANGU = 'day';

const { Day } = await import('@nuogz/pangu');



const dirPackage = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			pluginVue({
				template: {
					compilerOptions: {
						isCustomElement: tag => /^((module-|comp-|p-).+?|module)$/.test(tag)
					}
				}
			}),
		],
		root: resolve(dirPackage, 'src'),
		base: './',
		build: {
			target: 'esnext',
			outDir: resolve(dirPackage, 'dist'),
			emptyOutDir: true,
			chunkSizeWarningLimit: 1024,
			minify: true
		},
		optimizeDeps: {
			esbuildOptions: {
				target: 'esnext'
			}
		},
		define: {
			'BUILD_TIME': Day().unix()
		},
		publicDir: resolve(dirPackage, 'src', 'public'),
		clearScreen: false,
		server: {
			hmr: {
				port: 4563,
			},
			port: 4763,
			watch: {
				ignored: [
					'**/*.{api,lib,map}.js',
					'**/*.lib/**/*.js'
				]
			}
		}
	};
});
