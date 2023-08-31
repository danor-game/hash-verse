<template>
	<!-- 侧边栏 -->
	<p-sidebar ref="domSidebar" @contextmenu.self.prevent="showMenuSidebar">
		<template v-for="(tab, index) of TA.list" :key="`tab-${tab?.id}`">
			<template v-if="!tab.isHidden">
				<p-button
					v-tip.right="tab.title"
					v-menu="{ params: tab, ...menuTab }"
					:now="brop(TA.now === tab)"
					:tabindex="100 + index"
					@click="TA.change(tab)" @keydown.enter.space="TA.change(tab)"
				>
					<template v-if="tab.typeTab == 'icon'">
						<Fas :icon="tab.icon" />
					</template>
					<template v-if="tab.typeTab == 'title'">
						{{ tab.title }}
					</template>
					<template v-if="tab.typeTab == 'header'">
						<Fas corn :icon="tab.icon" />
						<p-header :style="{ backgroundImage: `url(${tab.header})` }" />
					</template>
				</p-button>
			</template>
		</template>
	</p-sidebar>


	<!-- 主模块 -->
	<p-main>
		<keep-alive>
			<component :is="moduleNow" :key="`module-${moduleNow}`" />
		</keep-alive>
	</p-main>
</template>

<script setup>
	import { ref, watch, inject, onMounted, toRaw } from 'vue';
	import { FontAwesomeIcon as Fas } from '@fortawesome/vue-fontawesome';
	import { faEarth } from '@fortawesome/free-solid-svg-icons';
	import { CustomMouseMenu } from '@howdyjs/mouse-menu';

	import CV from '@nuogz/css-var';
	import { $alert, $quest } from '@nuogz/vue-alert';

	import WA from './hashverse/WoneAdmin.js';
	import TA from './lib/tab-admin.js';


	import './index.pcss';
	import './index.sass';


	document.title = '哈希宇宙';


	const app = inject('app');


	const moduleNow = ref(null);
	const modulePre = ref('');
	watch(modulePre, async slot => {
		if(app.component(slot)) { return moduleNow.value = slot; }

		try {
			const parts = String(slot).split('-');

			try {
				if(parts.length == 2) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}.vue`)).default); }
				else if(parts.length == 3) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}.vue`)).default); }
				else if(parts.length == 4) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}/${parts[3]}.vue`)).default); }
				else if(parts.length == 5) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}.vue`)).default); }
				else { throw TypeError(`模块深度不为[2,3,4,5]: ${slot}`); }
			}
			catch(error) {
				if(parts.length == 2) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/index.vue`)).default); }
				else if(parts.length == 3) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}/index.vue`)).default); }
				else if(parts.length == 4) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}/${parts[3]}/index.vue`)).default); }
				else if(parts.length == 5) { app.component(slot, (await import(`./${parts[0]}/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}/index.vue`)).default); }
				else { throw TypeError(`模块深度不为[2,3,4,5]: ${slot}`); }
			}

			moduleNow.value = slot;
		}
		catch(error) { $alert(`加载模块失败: ${slot}, ${error.message || error}`, '加载模块失败'); }
	});


	TA.modulePre = modulePre;


	const menuSidebar = {
		useLongPressInMobile: true,
		menuWrapperCss: { background: 'snow', borderRadius: '4px' },
		menuItemCss: { hoverBackground: '#bfdbfe' },
		menuList: [
			{
				label: '➕ 创建世界线',
				fn: tab => {
					TA.addIcon('世界线', faEarth, 'wone', 'hashverse-Wone');
				},
			},
		]
	};
	const domSidebar = ref(null);
	const showMenuSidebar = event => CustomMouseMenu(Object.assign({ el: domSidebar.value }, menuSidebar)).show(event.x, event.y);


	const menuTab = {
		useLongPressInMobile: true,
		menuWrapperCss: { background: 'snow', borderRadius: '4px' },
		menuItemCss: { hoverBackground: '#bfdbfe' },
		menuList: [
			{
				label: '🚪 移除',
				tips: '世界线',
				fn: async tab => {
					if(await $quest('是否确定移除该世界线？（移除后将无法恢复！）')) {
						const index = WA.wones.indexOf(toRaw(tab.info?.wone ?? tab.paramsDelay?.[0]));

						if(index > -1) {
							WA.wones.splice(index, 1);
							WA.save();
						}

						TA.del(tab);
					}
				},
			},
		]
	};


	CV.widthSidebar = '7rem';
	CV.widthScroll = '0.5rem';
	CV.heightTopbar = '0rem';


	onMounted(() => {
		const wones = WA.load();

		TA.addIcon('世界线', faEarth, 'wone', 'hashverse-Wone', false, wones[0]);

		wones.slice(1).forEach(wone => TA.addIcon(`世界线 ${wone.name}`, faEarth, 'wone', 'hashverse-Wone', true, wone));
	});
</script>

<style lang="sass" scoped>
p-sidebar
	@apply fixed z-50 shadow-mdd p-1 bg-gray-100
	width: var(--widthSidebar)
	height: calc(100% - var(--heightTopbar))
	top: var(--heightTopbar)
	background-color: var(--cMain)


	svg[corn]
			@apply absolute opacity-25 z-10 text-xs top-1 left-1


	p-button
		@apply relative block rounded-md text-center text-xl shadow-mdd mt-2 cursor-pointer outline-none h-8 leading-8
		width: calc( var(--widthSidebar) - 0.55rem)
		background-color: var(--cBack)
		color: var(--cTextBack)

		&:focus
			@apply ring-2 ring-[var(--cSidebarRingFocus)]

		&[profile]
			@apply font-bold mt-0

		&[expand]
			@apply overflow-hidden px-1

			&:focus-within
				@apply overflow-visible w-24 ring-2 ring-[var(--cRingFocus)]

			input
				@apply rounded-md w-full text-center outline-none z-20 bg-transparent

		&[keyword]:focus-within
			@apply w-48

		&[now]
			@apply ring-2 ring-[var(--cSidebarRingNow)]

		p-header
			@apply relative block rounded-md shadow-md absolute top-1 left-1 bg-cover
			width: calc(100% - 0.5rem)
			height: calc(100% - 0.5rem)


	p-profiles
		@apply block p-0.5 pt-0

		p-profile-id
			@apply relative block rounded-md mt-2 text-center text-xl shadow-mdd cursor-pointer outline-none w-40 elli
			height: calc( var(--widthSidebar) - 0.55rem)
			line-height: calc( var(--widthSidebar) - 0.55rem)
			background-color: var(--cTextMain)
			color: var(--cTextMain)

			&:hover
				@apply ring-2 ring-green-500

			&[now]
				@apply font-bold



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
