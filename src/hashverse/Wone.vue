<template>
	<module>
		<template v-if="W">
			<Texter v-model="nameNew" name-new align="center" label="名" @keyup.enter.exact="addNife(nameNew)" />
			<Click button text="加入" @click="addNife(nameNew)" />
			<Click button text="清空" @click="clear" /><br />
			<p-box>
				<div>● Nife</div>
				<template v-for="(nife, index) of nifes" :key="`nife-${index}`">
					<NifePanel :nife="nife" @click="addFighter(nife)" />
				</template>
				<div>● 上场</div>
				<template v-for="(nife, index) of nifesFight" :key="`nife-fight-${index}`">
					<NifePanel :nife="nife" @click="delFighter(nife)" />
				</template>
				<br />
				<Click button text="开始" @click="startFight" /><br />
				<p-logs>
					<template v-for="(log, index) of logsFight" :key="`nife-fight-log-${index}`">
						<p-log v-html="log" />
					</template>
				</p-logs>
			</p-box>
		</template>
		<template v-if="!W">
			<WoneCreator :data="T.dataWoneNew" @create="createWone" />
		</template>
	</module>
</template>

<script setup>
	import { computed, onMounted, ref } from 'vue';

	import TA, { Tab } from '../lib/TabAdmin.js';

	import Texter from '../lib/comp/Texter.vue';
	import Click from '../lib/comp/Click.vue';

	import NifePanel from './comp/NifePanel.vue';
	import WoneCreator from './comp/WoneCreator.vue';

	import Wone from './Wone.js';
	import Fight from './Fight.js';
	import WA from './WoneAdmin.js';



	onMounted(() => TA.emitChange());


	const now = ref(new Tab());
	const T = computed(() => now.value.info);
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
	const addNife = async name => {
		W.value.born({ name });

		nameNew.value = '';

		WA.save();
	};

	const clear = () => {
		nifes.value.splice(0, nifes.value.length);

		WA.save();
	};



	const nifesFight = ref([]);
	const addFighter = nife => {
		if(nifesFight.value.length < 2) {
			nifesFight.value.push(nife);
		}
	};
	const delFighter = nife => {
		const index = nifesFight.value.indexOf(nife);

		if(index > -1) {
			nifesFight.value.splice(index, 1);
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

p-box
	@apply block m-4

p-log
	@apply block
</style>
