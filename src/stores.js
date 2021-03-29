import { writable } from 'svelte/store';

const appTheme = writable('dark');

const navDrawerOpen = writable(false);

export { appTheme, navDrawerOpen };