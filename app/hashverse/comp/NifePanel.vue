<template>
	<p-nife>
		<p-title :title="nife.title">{{nife.name}}</p-title>
		<p-attr>生命：{{nife.health}} / {{nife.healthMax}}</p-attr>
		<progress health :max="nife.healthMax" :value="nife.health" />
		<p-attr>攻击：{{nife.atk}} / {{nife.atkMax}}</p-attr>
		<progress atk :max="nife.atkMax" :value="nife.atk" />
		<p-attr>防御：{{nife.def}} / {{nife.defMax}}</p-attr>
		<progress def :max="nife.defMax" :value="nife.def" />
		<p-attr>速度：{{nife.spd}} / {{nife.spdMax}}</p-attr>
		<progress spd :max="nife.spdMax" :value="nife.spd" />
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
	@apply inblock bg-blue-100 m-2 mb-2 p-4 shadow-mdd rounded-md cursor-pointer w-48

	&:hover
		@apply shadow-xl

		p-title
			@apply text-blue-600 font-bold

	p-title
		@apply block mb-2 elli

	p-attr
		@apply block ml-2 elli

	progress
		@apply block ml-2 mb-2 h-1
		width: calc(100% - theme('spacing.2'))

		&::-webkit-progress-bar
			@apply bg-gray-300
		&[health]::-webkit-progress-value
			@apply bg-green-500
		&[atk]::-webkit-progress-value
			@apply bg-red-500
		&[def]::-webkit-progress-value
			@apply bg-blue-500
		&[spd]::-webkit-progress-value
			@apply bg-orange-500
</style>
