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
    <Route path="UR_MI_FS_WS_20_21_Group_G_website"><Home /></Route>
    <Route path="UR_MI_FS_WS_20_21_Group_G_website/visualizations/network"><Network /></Route>
    <Route path="UR_MI_FS_WS_20_21_Group_G_website/about"><About /></Route>
</main>