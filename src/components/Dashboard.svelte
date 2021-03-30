<script>
    import { onMount, onDestroy } from 'svelte';
    import bb, { line, area, areaSpline, zoom } from 'billboard.js';
    import 'billboard.js/dist/billboard.css';
    
    export let data;

    let updateCounter = 0;

    $: datesCovidTweets = Object.keys(data.covidTweets);
    $: datesNonCovidTweets = Object.keys(data.nonCovidTweets);
    $: datesCaseNumbers = data.covidCaseNumbers.map(d => d.date);
    $: covidTweets = Object.values(data.covidTweets);
    $: nonCovidTweets = Object.values(data.nonCovidTweets);
    $: dailyNewCases = data.covidCaseNumbers.map(d => d.new_cases);
    $: dailyNewDeaths = data.covidCaseNumbers.map(d => d.new_deaths);
    
    let innerWidth, innerHeight;

    let chart;

    function updateGraph() {
        updateCounter += 1;

        chart = bb.generate({
            bindto: '#dashboard-chart',
            data: {
                xs: {
                    covidTweets: 'datesCovidTweets',
                    nonCovidTweets: 'datesNonCovidTweets',
                    dailyNewCases: 'datesCaseNumbers',
                    dailyNewDeaths: 'datesCaseNumbers',
                },
                xFormat: `%Y-%m-%d`,
                columns: [
                    ['datesCovidTweets', ...datesCovidTweets],
                    ['datesNonCovidTweets', ...datesNonCovidTweets],
                    ['datesCaseNumbers', ...datesCaseNumbers],
                    ['covidTweets', ...covidTweets],
                    ['nonCovidTweets', ...nonCovidTweets],
                    ['dailyNewCases', ...dailyNewCases],
                    ['dailyNewDeaths', ...dailyNewDeaths],
                ],
                types: {
                    covidTweets: line(),
                    nonCovidTweets: line(),
                    dailyNewCases: area(),
                    dailyNewDeaths: area(),
                },
                axes: {
                    covidTweets: 'y',
                    nonCovidTweets: 'y',
                    dailyNewCases: 'y2',
                    dailyNewDeaths: 'y2',
                },
            },
            axis: {
                x: {
                    type: 'timeseries'
                },
                y: {
                    label: {
                        text: 'Number of Tweets',
                        position: 'outer-middle'
                    }
                },
                y2: {
                    show: true,
                    label: {
                        text: 'COVID-19 Case Numbers',
                        position: 'outer-middle'
                    }
                }
            },
            grid: {
                y: { 
                    show: true 
                },
            },
            tooltip: {
                show: false
            },
            padding: {
                top: 24,
                right: 100,
                bottom: 24,
            },
            zoom: {
                enabled: zoom()
            }
        });
    }

    onDestroy(() => {
        chart.destroy();
    });

    onMount(() => {
        updateGraph();
    });

    $: if (updateCounter >= 1) {
        data;
        chart && chart.destroy();
        updateGraph();
    }
</script>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>
