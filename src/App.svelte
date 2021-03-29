<script>
	import { appTheme, navDrawerOpen } from './stores.js';
	import { toggleNavigation } from './utils.js';
	import { Router } from 'svelte-routing';
	import { MaterialAppMin, Overlay } from 'svelte-materialify';
	import Header from './components/Header.svelte';
	import NavDrawer from './components/NavDrawer.svelte';
	import Content from './components/Content.svelte';

	let url = '';
</script>

<style>

</style>

<Router url={url}>
	<MaterialAppMin theme={$appTheme}>
		<Header />
		<NavDrawer active={$navDrawerOpen} />
		<Content />
		<Overlay active={$navDrawerOpen} absolute on:click={toggleNavigation} index={1} />
	</MaterialAppMin>
</Router>
