<template>
	<module>
		<Texter v-model="nameNew" name-new align="center" label="名" @keyup.enter.exact="addNamife(nameNew)" />
		<Click go text="加入" @click="addNamife(nameNew)" />
		<Click go text="清空" @click="clear" /><br />
		<template v-for="(namife, index) of namifes" :key="`namife-${index}`">
			<p-namife>
				<p-title :title="namife.title">● {{namife.name}}</p-title>
				<p-attr>生命：{{namife.hp}}</p-attr>
				<p-attr>攻击：{{namife.atk}}</p-attr>
				<p-attr>防御：{{namife.def}}</p-attr>
			</p-namife>
		</template>
	</module>
</template>

<script setup>
	import { inject, onMounted, ref } from 'vue';

	import Texter from '../lib/comp/Texter.vue';
	import Click from '../lib/comp/Click.vue';

	import Namife from './Namife.js';


	const $get = inject('$get');


	const nameNew = ref('');

	const namifes = ref([]);





	const addNamife = async name => {
		const data = await $get('hashverse/namife', { name: name?.trim(), type: 'binary' });


		namifes.value.push(new Namife(
			name,
			data.hp,
			data.atk,
			data.def,
		));

		nameNew.value = '';
	};

	const clear = () => namifes.value = [];


	onMounted(() => {
		addNamife('尼禄');
		addNamife('蕾姆');
		addNamife('可可萝');
	});



</script>

<style lang="sass" scoped>
[name-new]
	@apply inblock m-4 w-60
[go]
	@apply inblock m-4 ml-0

p-namife
	@apply inblock bg-blue-100 m-4 mb-8 p-4 shadow-mdd rounded-md cursor-pointer w-48

	&:hover
		@apply bg-blue-200

	p-title
		@apply block mb-4 elli

	p-attr
		@apply block m-4 mb-4 elli

	p-time
		@apply block m-4 mb-0 text-sm text-gray-400
</style>
