<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<module>
		<template v-if="W">
			<Texter v-model="nameNew" name-new align="center" label="名" label-split="&nbsp;" @keyup.enter.exact="createNife(nameNew)" />
			<Click button text="加入" @click="nameNew && createNife(nameNew)" />
			<Click button text="清空" @click="clearNife" />
			<Texter v-model="T.wone.seed" class="inblock m-4 w-40 p-1" align="center" label="种子" label-split="&nbsp;" readonly />
			<br />
			<p-nifes-box>
				<div><Fas :icon="faUsers" /> 你的nifes</div>
				<template v-for="(nife, index) of nifes" :key="`nife-${index}`">
					<NifePanel :nife="nife" @click.left="appendFighter(nife)" @remove="removeNife(nife)" />
				</template>
				<div><Fas :icon="faGun" /> 出战的nifes</div>
				<template v-for="(nife, index) of nifesFight" :key="`nife-fight-${index}`">
					<NifePanel :nife="nife" @click="removeFighter(nife)" />
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
			<WoneCreator :data="T.dataWoneNew" @create="createWone" />
		</template>
	</module>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';
	import { FontAwesomeIcon as Fas } from '@fortawesome/vue-fontawesome';
	import { faGun, faUsers } from '@fortawesome/free-solid-svg-icons';

	import TA, { Tab } from '../lib/TabAdmin.js';

	import { Click, Texter } from '@nuogz/vue-components';

	import NifePanel from './comp/nife-panel.vue';
	import WoneCreator from './comp/wone-creator.vue';

	import { Wone, Nife } from './Wone.js';
	import Fight from './Fight.js';
	import WA from './WoneAdmin.js';




	onMounted(() => TA.emitChange());


	const now = ref(new Tab());
	const T = computed(() => now.value.info);

	/** @type {import('vue').ComputedRef<Wone>} */
	const W = computed(() => T.value?.wone);
	const nifes = computed(() => W.value.nifes);




	TA.addChanger('wone', tab => {
		now.value = tab;


		if(!tab.info.isInit) {
			tab.info.isInit = true;

			let [wone] = tab.params;

			if(wone) {
				tab.info.wone = wone;
				tab.title = `世界线 ${tab.info.wone.name}`;
			}
			else {
				tab.info.dataWoneNew = {};
			}
		}
	});

	const createWone = data => {
		const wone = T.value.wone = new Wone(data);
		now.value.title = `世界线 ${wone.name}`;

		WA.wones.push(wone);
		WA.save();
	};



	const nameNew = ref('');


	/** @param {string} name */
	const createNife = async name => {
		W.value.born({ name });

		nameNew.value = '';

		WA.save();
	};
	/** @param {Nife} nife */
	const removeNife = nife => {
		const index = nifes.value.indexOf(nife);

		if(index > -1) { nifes.value.splice(index, 1); }

		removeFighter(nife);

		WA.save();
	};
	const clearNife = () => {
		nifes.value.splice(0, nifes.value.length);

		WA.save();
	};


	/** @type {import('vue').ComputedRef<Nife[]>} */
	const nifesFight = ref([]);
	const appendFighter = nife => {
		if(nifesFight.value.length < 2) {
			nifesFight.value.push(nife);
		}
	};
	const removeFighter = nife => {
		const index = nifesFight.value.indexOf(nife);

		if(index > -1) { nifesFight.value.splice(index, 1); }
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
	width: calc( 70dvw - (var(--widthSidebar) + var(--widthScroll)) / 2)
	height: calc( 92dvh )

p-fight-log-box
	@apply inblock p-4 overflow-auto
	width: calc( 30dvw - (var(--widthSidebar) + var(--widthScroll)) / 2)
	height: calc( 92dvh )

	p-log
		@apply block
</style>
