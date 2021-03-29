<script>
    import { Route } from 'svelte-routing';
    import Home from './Home.svelte';
    import Network from './Network.svelte';
    import About from './About.svelte';
</script>

<style>
    main {
        position: relative;
        width: 100%;
        height: calc(100vh - 56px);
    }
</style>

<main>
    <Route path="/"><Home /></Route>
    <Route path="visualizations/network"><Network /></Route>
    <Route path="about"><About /></Route>
</main>