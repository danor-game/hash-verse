<template>
	<p-nife>
		<p-title :title="nife.title">● {{nife.name}}</p-title>
		<p-attr>生命：{{nife.hp}} / {{nife.hpMax}}</p-attr>
		<progress hp :max="nife.hpMax" :value="nife.hp" />
		<p-attr>攻击：{{nife.atk}} / {{nife.atkMax}}</p-attr>
		<progress atk :max="nife.atkMax" :value="nife.atk" />
		<p-attr>防御：{{nife.def}} / {{nife.defMax}}</p-attr>
		<progress def :max="nife.defMax" :value="nife.def" />
	</p-nife>
</template>

<script setup>
	import Nife from '../Nife.js';

	defineProps({
		nife: { type: Nife, default: null },
	});
</script>

<style lang="sass" scoped>
p-nife
	@apply inblock bg-blue-100 m-4 mb-8 p-4 shadow-mdd rounded-md cursor-pointer w-48

	&:hover
		@apply shadow-xl

		p-title
			@apply text-blue-600 font-bold

	p-title
		@apply block mb-4 elli

	p-attr
		@apply block ml-4 elli

	progress
		@apply ml-4 mb-4
		width: calc(100% - theme('spacing.4'))

		&::-webkit-progress-bar
			@apply bg-gray-300
		&[hp]::-webkit-progress-value
			@apply bg-green-500
		&[atk]::-webkit-progress-value
			@apply bg-red-500
		&[def]::-webkit-progress-value
			@apply bg-blue-500
</style>
