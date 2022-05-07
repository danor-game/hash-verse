<template>
	<p-nife>
		<p-title :title="nife.title">{{nife.name}}</p-title>
		<p-attr>生命：{{nife.attribute.health}} / {{nife.attribute.healthLimit}}</p-attr>
		<progress health :value="nife.attribute.health" :max="nife.attribute.healthLimit" />
		<p-attr>攻击：{{nife.attribute.attack}} / {{nife.attribute.attackLimit}}</p-attr>
		<progress atk :value="nife.attribute.attack" :max="nife.attribute.attackLimit" />
		<p-attr>防御：{{nife.attribute.defense}} / {{nife.attribute.defenseLimit}}</p-attr>
		<progress def :value="nife.attribute.defense" :max="nife.attribute.defenseLimit" />
		<p-attr>速度：{{nife.attribute.speed}} / {{nife.attribute.speedLimit}}</p-attr>
		<progress spd :value="nife.attribute.speed" :max="nife.attribute.speedLimit" />
	</p-nife>
</template>

<script setup>
	import Nife0 from '../Nife0.js';

	defineProps({
		nife: { type: Nife0, default: null },
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
