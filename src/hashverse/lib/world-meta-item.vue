<template>
	<template v-for="(meta, key) of object" :key="`meta-enum-${path}-${key}`">
		<p-meta-item v-if="(meta instanceof worldFrame.MetaItem)" :style="{ marginLeft: `calc(var(--spc) * 2 * ${indent})` }">
			<template v-if="meta.type != 'array' && !(key == 'enable' && meta.type == 'boolean')">
				<p-key @click.ctrl.prevent="worldFrame.setMetaDefault(meta, data, key)">{{ joinPath(prefix, meta.name) }}</p-key>
				<p-desc v-if="meta.desc">{{ meta.desc }}</p-desc>
				<p-path v-if="showPath">{{ joinPath(path, key) }}</p-path>
			</template>

			<template v-if="meta.type == 'string'">
				<Texter v-model="data[key]" form align="center" />
			</template>

			<template v-if="meta.type == 'number'">
				<Texter v-model="data[key]" form type="number" :min="meta.min" :max="meta.max" align="center" :step="meta.step" />
			</template>

			<template v-if="meta.type == 'boolean'">
				<p-button-group form>
					<Click text="启用" button :white="data[key] === false" @click="data[key] = true" />
					<Click text="禁用" button :white="data[key] === true" @click="data[key] = false" />
				</p-button-group>
			</template>


			<template v-if="meta.type == 'array'">
				<details>
					<summary>
						<p-key @click.ctrl.prevent="worldFrame.setMetaDefault(meta, data, key)">{{ joinPath(prefix, meta.name) }}</p-key>
					</summary>

					<span form class="ml-2">{{ JSON.stringify(data[key], null, '\t') }}</span>
				</details>
			</template>
		</p-meta-item>

		<template v-else-if="typeof meta == 'object'">
			<details v-if="Object.keys(meta).length > 2" open :style="{ marginLeft: `calc(var(--spc) * 2 * ${indent})` }">
				<summary>
					<p-key @click.ctrl.prevent="worldFrame.setMetaDefault(meta, data, key)">{{ joinPath(prefix, meta.$?.name ?? meta.$) }}</p-key>
					<p-desc v-if="meta.$?.desc">{{ meta.$.desc }}</p-desc>
				</summary>

				<Self :object="object[key]" :data="data[key]" :world-frame="worldFrame" :path="joinPath(path, key)" :indent="indent + 1" :show-path="showPath" />
			</details>
			<Self v-else :object="object[key]" :data="data[key]" :world-frame="worldFrame" :path="joinPath(path, key)" :prefix="joinPath(prefix, meta.$?.name ?? meta.$)" :indent="indent" :show-path="showPath" />
		</template>
	</template>
</template>

<script setup>
	/* eslint "vue/no-mutating-props": ["error", { "shallowOnly": true }] */

	import { Click, Texter } from '@nuogz/vue-components';

	import WorldFrame from './world-frame.js';

	import Self from './world-meta-item.vue';



	defineProps({
		object: { type: Object, default: () => ({}), required: true },
		data: { type: Object, default: () => ({}), required: true },
		worldFrame: { validator: world => world?.prototype instanceof WorldFrame, default: null, required: true },

		path: { type: String, default: '' },
		prefix: { type: String, default: '' },
		indent: { type: Number, default: 0 },

		showPath: { type: Boolean, default: false },
	});

	const joinPath = (path, key) => `${path}.${key}`.replace(/^\./, '');
</script>

<style lang="sass" scoped>
p-meta-item
	@apply block

details
	@apply block mb-2
p-key
	@apply inblock cursor-pointer
p-desc
	@apply inline-block align-middle ml-2 text-sm text-gray-400
p-path
	@apply inline-block align-middle ml-2 text-xs text-gray-400

[form]
	@apply block mt-2 mb-4 w-96

	[button]
		@apply inblock w-16 h-8 leading-8 rounded-none

		&[white]
			@apply lead-b2-8

		&:first-child
			@apply rounded-l-sm
		&:last-child
			@apply rounded-r-sm

</style>
