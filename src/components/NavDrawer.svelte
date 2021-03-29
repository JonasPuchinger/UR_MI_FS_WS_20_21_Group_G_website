<script>
    import { Link } from 'svelte-routing';
    import { NavigationDrawer, List, ListGroup, ListItem, Button, Icon } from 'svelte-materialify';
    import { mdiHomeOutline, mdiChartBubble, mdiChevronUp, mdiInformationOutline } from '@mdi/js';

    export let active;

    let expanded = true;
</script>

<style>
    
</style>

<NavigationDrawer {active} fixed clipped style="height: 100vh;">
    <List nav dense>
        <Link to="UR_MI_FS_WS_20_21_Group_G_website">
            <ListItem>
            <span slot="prepend">
                <Icon path={mdiHomeOutline} />
            </span>
            Home
            </ListItem>
        </Link>
        <ListGroup bind:active={expanded} offset={72}>
            <span slot="prepend">
              <Icon path={mdiChartBubble} />
            </span>
            <span slot="activator">Visualizations</span>
            <span slot="append">
              <Icon path={mdiChevronUp} rotate={expanded ? 0 : 180} />
            </span>
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/visualizations/network"><ListItem>Network</ListItem></Link>
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/"><ListItem>Vis 2</ListItem></Link>
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/"><ListItem>Vis 3</ListItem></Link>
            <Link to="UR_MI_FS_WS_20_21_Group_G_website/"><ListItem>Vis 4</ListItem></Link>
        </ListGroup>
        <Link to="UR_MI_FS_WS_20_21_Group_G_website/about">
            <ListItem>
            <span slot="prepend">
                <Icon path={mdiInformationOutline} />
            </span>
            About
            </ListItem>
        </Link>
    </List>
</NavigationDrawer>
