<template>
	<module v-if="dataNew">
		<p-title>新世界</p-title>
		<p-box>
			<Texter v-model="dataNew.name" form align="center" label="名称" />
			<Texter v-model="dataNew.seed" form _br align="center" label="种子" />
			<Texter v-model="dataNew.option.fight.roundMax" form _br align="center" label="最大回合" type="number" min="1" />
			<Click button text="创建" @click="createWorld(nameNew)" />
		</p-box>
	</module>
</template>

<script setup>
	import { computed } from 'vue';

	import { randomString } from '@nuogz/utility';
	import { Click, Texter } from '@nuogz/vue-components';



	const props = defineProps({
		data: { type: Object, default: null },
	});
	const emit = defineEmits(['create']);



	const dataNew = computed(() => {
		if(props.data && !props.data.isInit) {
			const seed = randomString(6);

			return Object.assign(props.data, {
				isInit: true,

				name: seed,
				seed: seed,

				option: {
					fight: {
						roundMax: 300,
					}
				},

				nifes: [],
			});
		}

		return props.data;
	});



	const createWorld = () => emit('create', dataNew.value);
</script>

<style lang="sass" scoped>
p-title
	@apply block m-4 text-2xl text-[var(--cMain)]

p-box
	@apply m-4

[form]
	@apply inblock mb-4 w-80 p-1

	&[_br]
		@apply block

[button]
	@apply block mb-4 mr-2 px-2 py-1 w-16

p-box
	@apply block m-4

p-log
	@apply block
</style>
