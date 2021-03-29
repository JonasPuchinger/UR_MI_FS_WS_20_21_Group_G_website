<script>
    import { toggleTheme, toggleNavigation } from '../utils.js';
    import { AppBar, Button, Icon, Overlay } from 'svelte-materialify';
    import { mdiMenu, mdiThemeLightDark } from '@mdi/js';
</script>

<style>
    .app-bar-fill {
        flex-grow: 1;
    }
</style>


<AppBar>
    <div slot="icon">
        <Button fab depressed on:click={toggleNavigation}>
            <Icon path={mdiMenu} />
        </Button>
    </div>
    <span slot="title">German Politicians Usage of Twitter during the COVID-19 Pandemic</span>
    <div class="app-bar-fill" />
    <Button on:click={toggleTheme}>
        <Icon path={mdiThemeLightDark} />
    </Button>
</AppBar>
