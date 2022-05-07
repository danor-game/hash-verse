import './lib/hack.js';

import { createApp } from 'vue';

import App from './index.vue';

import { install as installBus } from './lib/plugin/Bus.js';
import { install as installBrop } from './lib/plugin/Brop.js';
import { install as installAlert } from './lib/plugin/Alert/Alert.js';
import { install as installCSSVar } from './lib/plugin/CSSVar.js';


const app = createApp(App);
app.provide('app', app);


window.addEventListener('load', async () => {
	// (await import('./lib/plugin/Bus.js')).install(app);
	await installBus(app);
	// (await import('./lib/plugin/Brop.js')).install(app);
	await installBrop(app);
	// (await import('./lib/plugin/Alert/Alert.js')).install(app);
	await installAlert(app);
	// (await import('./lib/plugin/Aegis.js')).install(app);
	(await import('./lib/plugin/CSSVar.js')).install(app);
	await installCSSVar(app);
	(await import('./lib/plugin/Fontawesome.js')).install(app);
	(await import('./lib/plugin/Tippy/Tippy.js')).install(app);
	// (await import('./lib/plugin/Wocker/Wocker.js')).install(app);
	(await import('./lib/plugin/RightMenu.js')).install(app);


	app.mount('#app');
});
