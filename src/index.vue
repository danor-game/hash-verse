<template>
	<!-- 侧边栏 -->
	<Sidebar @show-menu-background="showMenuSidebar" />

	<!-- 主模块 -->
	<p-main>
		<keep-alive>
			<component :is="moduleNow" :key="`module-${moduleNow}`" />
		</keep-alive>
	</p-main>
</template>

<script setup>
	import { onMounted, toRaw } from 'vue';
	import { faEarth } from '@fortawesome/free-solid-svg-icons';
	import { CustomMouseMenu } from '@howdyjs/mouse-menu';

	import CV from '@nuogz/css-var';
	import { Sidebar, domSidebar, moduleNow, tabAdmin } from '@nuogz/vue-sidebar';
	import { $quest } from '@nuogz/vue-alert';

	import WorldAdmin from './hashverse/lib/world-admin.js';


	import './index.pcss';
	import './index.sass';



	document.title = '哈希宇宙';


	CV.widthScroll = '0.5rem';
	CV.widthSidebar = '10rem';
	CV.heightTopbar = '0rem';


	const menuTab = {
		useLongPressInMobile: true,
		menuWrapperCss: { background: 'snow', borderRadius: '4px' },
		menuItemCss: { hoverBackground: '#bfdbfe' },
		menuList: [
			{
				label: '🚪 移除',
				tips: '世界',
				fn: async tab => {
					if(await $quest('是否确定移除该世界？（移除后将无法恢复！）')) {
						const index = WorldAdmin.worlds.indexOf(toRaw(tab.info?.world ?? tab.paramsDelay?.[0]));

						if(index > -1) {
							WorldAdmin.worlds.splice(index, 1);
							WorldAdmin.save();
						}

						tabAdmin.del(tab);
					}
				},
			},
		]
	};


	const optionTabWorld = {
		type: 'icon|title',
		title: '世界',
		icon: faEarth,
		menu: menuTab,
		style: {
			textAlign: 'left',
			height: '3rem',
			lineHeight: '3rem',
		},
	};

	onMounted(() => {
		const worlds = WorldAdmin.load();

		tabAdmin.add('hashverse-@danor-world', optionTabWorld, worlds[0]);

		for(const world of worlds.slice(1)) {
			tabAdmin.add('hashverse-@danor-world', { ...optionTabWorld, title: `${world.name}`, delay: true }, world);
		}
	});


	const menuSidebar = {
		useLongPressInMobile: true,
		menuWrapperCss: { background: 'snow', borderRadius: '4px' },
		menuItemCss: { hoverBackground: '#bfdbfe' },
		menuList: [
			{
				label: '➕ 创建世界',
				fn: tab => {
					tabAdmin.add('hashverse-@danor-world', optionTabWorld);
				},
			},
		]
	};

	const showMenuSidebar = event => CustomMouseMenu(Object.assign({ el: domSidebar.value }, menuSidebar)).show(event.x, event.y);
</script>

<style lang="sass" scoped>
p-main
	margin-top: var(--heightTopbar)
	margin-left: var(--widthSidebar)
	width: calc(100% - var(--widthSidebar))
	@apply block relative

	module
		@apply block relative
</style>

<style lang="sass">
.tippy-box[data-theme~='light-border']
	@apply shadow-mdd px-2 text-[var(--cTextMain)] bg-[var(--cMain)] #{!important}
</style>
