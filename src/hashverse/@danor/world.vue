<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<module>
		<template v-if="W && editing">
			<WorldEditor :data="T.raw" :world-frame="World" action-submit="修改" @submit="modifyWorld" @close="editing = false" />
		</template>
		<template v-else-if="!W && T.raw">
			<WorldEditor :data="T.raw" :world-frame="World" action-submit="创建" @submit="createWorld" />
		</template>
		<template v-else-if="W">
			<Texter v-model="nameNew" name-new align="center" label="名" label-split="&nbsp;" @keyup.enter.exact="createNife(nameNew)" />
			<Click button text="加入" @click="nameNew && createNife(nameNew)" />
			<Click button text="清空" @click="clearNife" />
			<Texter v-model="T.world.seed" class="inblock m-4 ml-0 w-40 p-1" align="center" label="种子" label-split="&nbsp;" @keyup.enter.exact="flushWorld" />
			<Click button text="变换" @click="flushWorld" />
			<Click button text="随机变换" @click="(T.world.seed = randomString(6)), flushWorld()" />
			<Click button text="编辑世界" @click="toModifyWorld" />
			<br />
			<p-nifes-box>
				<div><Fas :icon="faUsers" /> 你的nifes</div>
				<template v-for="(nife, index) of nifes" :key="`nife-${index}`">
					<NifePanel :nife="nife" @click.left.exact="appendFighter(nife)" @click.right.exact.prevent="removeNife(nife)" />
				</template>
				<div><Fas :icon="faGun" /> 出战的nifes</div>
				<template v-for="(nife, index) of nifesFight" :key="`nife-fight-${index}`">
					<NifePanel :nife="nife" @click.right.exact.prevent="removeFighter(nife)" />
				</template>
				<br />
				<Click button text="开始" @click="startFight" /><br />
			</p-nifes-box>
			<p-fight-log-box ref="eBoxLog">
				<template v-for="(log, index) of logsFight" :key="`nife-fight-log-${index}`">
					<p-log v-html="log" />
				</template>
			</p-fight-log-box>
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
	import WorldEditor from '../lib/world-editor.vue';

	import WorldAdmin from '../lib/world-admin.js';

	import World from './world.js';
	import Fight from './fight.js';



	const now = ref(new Tab());
	const T = computed(() => now.value.info);

	/** @type {import('vue').ComputedRef<World>} */
	const W = computed(() => T.value?.world);
	const nifes = computed(() => W.value.nifes);

	const editing = ref(false);


	onMounted(() => tabAdmin.emitChanged('mounted'));
	tabAdmin.addTabHandle('hashverse-@danor-world', now, tab => {
		const [world] = tab.params;

		tab.info.World = World;

		if(world) {
			tab.info.world = world;
			tab.title = `${tab.info.world.name}`;
		}
		else {
			tab.info.raw = World.setMetaDefault(World.meta);
		}
	});

	const createWorld = raw => {
		const world = T.value.world = new World(raw);
		now.value.title = `${world.name}`;

		editing.value = false;

		WorldAdmin.worlds.push(world);
		WorldAdmin.save();
	};
	const toModifyWorld = () => {
		T.value.raw = W.value.toRaw();
		editing.value = true;
	};
	const modifyWorld = raw => {
		const worldOld = T.value.world;
		const world = T.value.world = new World(raw);
		now.value.title = `${world.name}`;

		editing.value = false;

		WorldAdmin.worlds.splice(worldOld, 1, world);
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


	/** @type {import('vue').Ref<HTMLElement>} */
	const eBoxLog = ref(null);
	const logsFight = ref([]);
	const startFight = () => {
		const fight = new Fight(nifesFight.value[0], nifesFight.value[1], W.value);

		fight.start();

		logsFight.value.splice(0, logsFight.value.length);
		logsFight.value.unshift('--------------新的战斗--------------');
		logsFight.value.unshift(...fight.logs.reverse());
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

	:deep(p-log)
		--cHighlightNoun: var(--cMain)
		--cHighlightGreen: theme("colors.green.500")
		--cHighlightRed: theme("colors.red.500")
		--cHighlightOrange: theme("colors.orange.500")


		@apply block h-6 leading-6 mb-0.5

		span
			&[noun]
				@apply text-[var(--cHighlightNoun)] font-bold
			&[green]
				@apply text-[var(--cHighlightGreen)]
			&[red]
				@apply text-[var(--cHighlightRed)]
			&[orange]
				@apply text-[var(--cHighlightOrange)]


		progress[health]
			@apply inline-block align-middle h-4 relative top-[-0.075rem] w-32
			&::-webkit-progress-bar
				@apply bg-[var(--cProgressBack)] rounded-sm
			&::-webkit-progress-value
				@apply bg-[var(--cHighlightGreen)] rounded-sm


		p-progress-text
			@apply inline-block align-middle relative top-[-0.075rem] ml-2 w-0
			@apply text-sm leading-6 text-white mix-blend-difference
			left: calc(var(--spc) * -32)

</style>
