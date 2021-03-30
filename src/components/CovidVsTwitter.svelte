<script>
	import { ProgressCircular } from 'svelte-materialify';
	import Dashboard from './Dashboard.svelte';

	let covidTweets;
	let nonCovidTweets;
	let covidCaseNumbers;

	let data;

	async function fetchData() {
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/covid_tweets.json?token=AELGBDGYK4BCPLAOYG7XIQTANRFFU')
			.then(res => res.json())
			.then(data => covidTweets = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/non_covid_tweets.json?token=AELGBDH7Y2RMQ3EMYWRVBTDANRFI4')
			.then(res => res.json())
			.then(data => nonCovidTweets = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/covid_case_numbers_germany_2020.json?token=AELGBDCYSLWLML63STUDO6LANR24Q')
			.then(res => res.json())
			.then(data => covidCaseNumbers = data);

		data = { covidTweets, nonCovidTweets, covidCaseNumbers };
	}

	let promise = fetchData();
</script>

<style>
	.loader {
		height: 100%;
	}

	.chart {
		width: 100%;
		min-width: 500px;
		max-width: 100vw;
		height: calc(100vh - 56px);
		min-height: 600px;
		max-height: calc(100vh - 56px);
		margin: 0 auto;
	}
</style>

{#await promise}
	<div class="d-flex justify-center align-center loader">
		<ProgressCircular indeterminate color="primary" />
  	</div>
{:then}
	<div class="chart d-flex justify-center align-center" id="dashboard-chart">
		<Dashboard data={data} />
	</div>
{/await}