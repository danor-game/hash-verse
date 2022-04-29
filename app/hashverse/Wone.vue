<template>
	<module>
		<template v-if="W">
			<Texter v-model="nameNew" name-new align="center" label="名" @keyup.enter.exact="addNife(nameNew)" />
			<Click button text="加入" @click="addNife(nameNew)" />
			<Click button text="清空" @click="clear" /><br />
			<p-box>
				<div>● nifes</div>
				<template v-for="(nife, index) of nifes" :key="`nife-${index}`">
					<NifePanel :nife="nife" @click="addFighter(nife)" />
				</template>
				<div>● fighter</div>
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
		<template v-else>
			<WoneCreator :data="T.dataWoneNew" @create="createWone" />
		</template>
	</module>
</template>

<script setup>
	import { computed, inject, onMounted, ref } from 'vue';

	import { Tab } from '../lib/TabAdmin.js';

	import Texter from '../lib/comp/Texter.vue';
	import Click from '../lib/comp/Click.vue';

	import NifePanel from './comp/NifePanel.vue';
	import WoneCreator from './comp/WoneCreator.vue';

	import Wone from './Wone.js';
	import Nife from './Nife.js';
	import Fight from './Fight.js';


	/** @type {import('../lib/TabAdmin.js').default} */
	const TA = inject('tabAdmin');


	onMounted(() => TA.emitChange());

	const now = ref(new Tab());
	const T = computed(() => now.value.info);
	const W = computed(() => T.value.wone);




	TA.addChanger('wone', tab => {
		now.value = tab;


		if(!tab.info.isInit) {
			tab.info.isInit = true;

			let [data] = tab.params;

			if(data) {
				tab.info.wone = new Wone(data);
			}
			else {
				tab.info.dataWoneNew = {};
			}
		}
	});
	const wonesRaw = inject('wonesRaw');
	const createWone = data => {
		T.value.wone = new Wone(data);

		wonesRaw.push(data);
		localStorage.setItem('wones', JSON.stringify(wonesRaw));
	};


	const namesNife = [];

	const saveNames = () => localStorage.setItem('nife-names', JSON.stringify(namesNife));


	const nifes = ref([]);
	const nameNew = ref('');


	const addNife = async name => {
		nifes.value.push(new Nife(name));

		nameNew.value = '';

		saveNames(namesNife.push(name));
	};

	const clear = () => {
		nifes.value = [];

		saveNames(namesNife.splice(0, namesNife.length));
	};




	onMounted(() => {
		const namesStoragedRaw = localStorage.getItem('nife-names');

		if(!namesStoragedRaw) {
			namesNife.push('尼禄');
			namesNife.push('蕾姆');
			namesNife.push('可可萝');

			saveNames();
		}
		else {
			namesNife.push(...JSON.parse(namesStoragedRaw));
		}

		namesNife.forEach(name => nifes.value.push(new Nife(name)));
	});


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
		const fight = new Fight(nifesFight.value[0], nifesFight.value[1]);

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
