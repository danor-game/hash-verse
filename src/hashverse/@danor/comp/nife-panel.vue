<template>
	<p-nife @click.right.prevent="emit('remove')">
		<p-title :title="nife.title"><Fas :icon="faUser" /> {{ nife.name }}</p-title>
		<p-attr>生命：{{ nife.attribute.health }} / {{ nife.attribute.healthMax }}</p-attr>
		<progress health :value="nife.attribute.health" :max="nife.attribute.healthMax" />
		<p-attr>攻击：{{ nife.attribute.attack }} / {{ nife.attribute.attackMax }}</p-attr>
		<progress atk :value="nife.attribute.attack" :max="nife.attribute.attackMax" />
		<p-attr>防御：{{ nife.attribute.defense }} / {{ nife.attribute.defenseMax }}</p-attr>
		<progress def :value="nife.attribute.defense" :max="nife.attribute.defenseMax" />
		<p-attr>速度：{{ nife.attribute.speed }} / {{ nife.attribute.speedMax }}</p-attr>
		<progress spd :value="nife.attribute.speed" :max="nife.attribute.speedMax" />
		<br />
		<p-attr>总计：{{ nife.attribute.total }} / {{ nife.attribute.totalMax }}</p-attr>
		<progress total :value="nife.attribute.total" :max="nife.attribute.totalMax" />
	</p-nife>
</template>

<script setup>
	import { FontAwesomeIcon as Fas } from '@fortawesome/vue-fontawesome';
	import { faUser } from '@fortawesome/free-solid-svg-icons';

	import NifeFrame from '../../lib/nife-frame.js';



	defineProps({
		nife: { type: NifeFrame, default: null },
	});
	const emit = defineEmits(['remove']);
</script>

<style lang="sass" scoped>
p-nife
	@apply inblock m-2 mb-2 p-4 shadow-mdd rounded-md cursor-pointer w-52
	background-color: color-mix(in srgb, var(--cMain) 80%, black)

	&:hover
		@apply shadow-xl bg-[var(--cMain)]

		p-title
			@apply font-bold font-bold

	p-title
		@apply block mb-2 elli

	p-attr
		@apply block ml-2 elli

	progress
		@apply block ml-2 mb-2 h-1
		width: calc(100% - theme('spacing.2'))

		&::-webkit-progress-bar
			@apply bg-[var(--cProgressBack)]
		&[health]::-webkit-progress-value
			@apply bg-green-500
		&[atk]::-webkit-progress-value
			@apply bg-red-500
		&[def]::-webkit-progress-value
			@apply bg-blue-500
		&[spd]::-webkit-progress-value
			@apply bg-orange-500
		&[total]::-webkit-progress-value
			@apply bg-pink-500
</style>
