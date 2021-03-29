import { appTheme, navDrawerOpen } from './stores.js';

let appThemeValue,
    navDrawerOpenValue;

const unsubscribeAppTheme = appTheme.subscribe(value => {
    appThemeValue = value;
});

const unsubscribeNavDrawerOpen = navDrawerOpen.subscribe(value => {
    navDrawerOpenValue = value;
});

const toggleTheme = () => {
    appTheme.set(appThemeValue == 'light' ? 'dark' : 'light');
}

const toggleNavigation = () => {
    navDrawerOpen.set(!navDrawerOpenValue);
}

export { toggleTheme, toggleNavigation };
