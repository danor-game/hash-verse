<template>
	<module v-if="data">
		<p-title @click.ctrl="showPath = !showPath">{{ actionSubmit }}{{ worldFrame.meta.$ }}世界</p-title>
		<p-box>
			<MetaItem :object="worldFrame.meta" :data="data" :world-frame="worldFrame" :show-path="showPath" />

			<Click button :text="actionSubmit" @click="createWorld(nameNew)" />
			<Click button white text="关闭" @click="emit('close')" />
		</p-box>
	</module>
</template>

<script setup>
	import { ref } from 'vue';

	import { Click } from '@nuogz/vue-components';

	import WorldFrame from './world-frame.js';

	import MetaItem from './world-meta-item.vue';



	const props = defineProps({
		data: { type: Object, default: null, required: true },
		worldFrame: { validator: world => world?.prototype instanceof WorldFrame, default: null, required: true },
		actionSubmit: { type: String, default: '提交' }
	});
	const emit = defineEmits(['submit', 'close']);


	const createWorld = () => emit('submit', props.data);


	const showPath = ref(false);
</script>

<style lang="sass" scoped>
p-title
	@apply block m-4 text-2xl text-[var(--cMain)]

p-box
	@apply block m-4

[button]
	@apply inblock mb-4 mr-2 px-2 py-1 w-16 h-8

	&[white]
		@apply lead-b2-6
</style>
