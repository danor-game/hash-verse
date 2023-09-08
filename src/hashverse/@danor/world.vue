<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<module>
		<template v-if="W">
			<Texter v-model="nameNew" name-new align="center" label="名" label-split="&nbsp;" @keyup.enter.exact="createNife(nameNew)" />
			<Click button text="加入" @click="nameNew && createNife(nameNew)" />
			<Click button text="清空" @click="clearNife" />
			<Texter v-model="T.world.seed" class="inblock m-4 ml-0 w-40 p-1" align="center" label="种子" label-split="&nbsp;" @keyup.enter.exact="flushWorld" />
			<Click button text="变换" @click="flushWorld" />
			<Click button text="随机变换" @click="(T.world.seed = randomString(6)), flushWorld()" />
			<br />
			<p-nifes-box>
				<div><Fas :icon="faUsers" /> 你的nifes</div>
				<template v-for="(nife, index) of nifes" :key="`nife-${index}`">
					<NifePanel :nife="nife" @click.left.exact="appendFighter(nife)" @remove="removeNife(nife)" />
				</template>
				<div><Fas :icon="faGun" /> 出战的nifes</div>
				<template v-for="(nife, index) of nifesFight" :key="`nife-fight-${index}`">
					<NifePanel :nife="nife" @click.left.exact="removeFighter(nife)" />
				</template>
				<br />
				<Click button text="开始" @click="startFight" /><br />
			</p-nifes-box>
			<p-fight-log-box>
				<template v-for="(log, index) of logsFight" :key="`nife-fight-log-${index}`">
					<p-log v-html="log" />
				</template>
			</p-fight-log-box>
		</template>
		<template v-if="!W">
			<WorldCreator :data="T.dataWorldNew" @create="createWorld" />
		</template>
	</module>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { FontAwesomeIcon as Fas } from '@fortawesome/vue-fontawesome';
	import { faGun, faUsers } from '@fortawesome/free-solid-svg-icons';

	import { randomString } from '@nuogz/utility';
	import { tabAdmin, Tab } from '@nuogz/vue-sidebar';
	import { Click, Texter } from '@nuogz/vue-components';

	import NifePanel from './comp/nife-panel.vue';
	import WorldCreator from './comp/world-creator.vue';

	import WorldAdmin from '../lib/world-admin.js';

	import World from './world.js';
	import Fight from './fight.js';



	const now = ref(new Tab());
	const T = computed(() => now.value.info);

	/** @type {import('vue').ComputedRef<World>} */
	const W = computed(() => T.value?.world);
	const nifes = computed(() => W.value.nifes);



	onMounted(() => tabAdmin.emitChanged('mounted'));
	tabAdmin.addTabHandle('hashverse-@danor-world', now, tab => {
		const [world] = tab.params;

		if(world) {
			tab.info.world = world;
			tab.title = `${tab.info.world.name}`;
		}
		else {
			tab.info.dataWorldNew = {};
		}
	});

	const createWorld = data => {
		const world = T.value.world = new World(data);
		now.value.title = `${world.name}`;

		WorldAdmin.worlds.push(world);
		WorldAdmin.save();
	};
	const flushWorld = () => {
		W.value.flush();
		W.value.nifes.forEach(nife => nife.flush());

		WorldAdmin.save();
	};



	const nameNew = ref('');


	/** @param {string} name */
	const createNife = async name => {
		if(~W.value.nifes.findIndex(nife => nife.name == name)) { return; }

		W.value.born({ name });

		nameNew.value = '';

		WorldAdmin.save();
	};
	/** @param {import('./nife.js').default} nife */
	const removeNife = nife => {
		const index = nifes.value.indexOf(nife);

		if(index > -1) { nifes.value.splice(index, 1); }

		removeFighter(nife);

		WorldAdmin.save();
	};
	const clearNife = () => {
		nifes.value.splice(0, nifes.value.length);

		WorldAdmin.save();
	};


	const nifesFight = computed(() => W.value.namesFighter.map(name => W.value.nifes.find(nife => nife.name == name)));
	const appendFighter = nife => {
		if(W.value.namesFighter.length < 2) {
			W.value.namesFighter.push(nife.name);

			WorldAdmin.save();
		}
	};
	const removeFighter = nife => {
		const index = W.value.namesFighter.indexOf(nife.name);

		if(~index) {
			W.value.namesFighter.splice(index, 1);

			WorldAdmin.save();
		}
	};


	const logsFight = ref([]);
	const startFight = () => {
		const fight = new Fight(nifesFight.value[0], nifesFight.value[1], W.value);

		fight.start();

		logsFight.value.splice(0, logsFight.value.length);
		logsFight.value.push('--------------新的战斗--------------');
		logsFight.value.push(...fight.logs);
	};
</script>

<style lang="sass" scoped>
[name-new]
	@apply inblock m-4 w-60 p-1
[button]
	@apply inblock m-4 ml-0 px-2 py-1

p-nifes-box
	@apply inblock p-4 overflow-auto
	width: calc( 60dvw - (var(--widthSidebar) + var(--widthScroll)) / 2)
	height: calc( 92dvh )

p-fight-log-box
	@apply inblock p-4 overflow-auto
	width: calc( 40dvw - (var(--widthSidebar) + var(--widthScroll)) / 2)
	height: calc( 92dvh )

	p-log
		@apply block
</style>
