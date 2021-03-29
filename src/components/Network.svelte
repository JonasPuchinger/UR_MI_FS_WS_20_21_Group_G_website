<script>
	import { ProgressCircular } from 'svelte-materialify';
	import Multigraph from './Multigraph.svelte';
	import CommunitiesGraph from './CommunitiesGraph.svelte';

	let multigraphAllTweets;
	let multigraphCovid;
	let multigraphNonCovid;
	let communitiesGraphAllTweets;
	let communitiesGraphCovid;
	let communitiesGraphNonCovid;

	let components = [];
	let selected;

	async function sleep(ms) {
		selected = components[0];
		return setTimeout(ms);
	}

	async function fetchData() {
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/multigraph.json?token=AELGBDAGVLUIVOQZQJKEBNTANMBRC')
			.then(res => res.json())
			.then(data => multigraphAllTweets = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/multi_graph_covid.json?token=AELGBDFHFRSFYZXUZ7F3NCLANMBZK')
			.then(res => res.json())
			.then(data => multigraphCovid = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/multi_graph_non_covid.json?token=AELGBDGUB5CMXPPAY23HG3TANMB2W')
			.then(res => res.json())
			.then(data => multigraphNonCovid = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/communities_multigraph.json?token=AELGBDEGMTNWFOLD4MIO3C3ANMB4C')
			.then(res => res.json())
			.then(data => communitiesGraphAllTweets = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/communities_multigraph_covid.json?token=AELGBDHEP7EJCO5MMZFICCTANMB5K')
			.then(res => res.json())
			.then(data => communitiesGraphCovid = data);
		await fetch('https://raw.githubusercontent.com/JonasPuchinger/assets/master/fs_group_g_website/communities_multigraph_non_covid.json?token=AELGBDEQLVJJ2VMC6KV6XVDANMB6Y')
			.then(res => res.json())
			.then(data => communitiesGraphNonCovid = data);

		components = [
			{ name: 'Multigraph All Tweets', component: Multigraph, data: multigraphAllTweets },
			{ name: 'Multigraph COVID Tweets', component: Multigraph, data: multigraphCovid },
			{ name: 'Multigraph Non-COVID Tweets', component: Multigraph, data: multigraphNonCovid },
			{ name: 'Communities All Tweets', component: CommunitiesGraph, data: communitiesGraphAllTweets },
			{ name: 'Communities COVID Tweets', component: CommunitiesGraph, data: communitiesGraphCovid },
			{ name: 'Communities Non-COVID Tweets', component: CommunitiesGraph, data: communitiesGraphNonCovid }
		]

		await sleep(1000);
	}

	let promise = fetchData();
</script>

<style>
	.loader {
		height: 100%;
	}

	select {
		appearance: listbox;
		z-index: 2;
		position: absolute;
		top: 1em;
		right: 1em;
		color: var(--theme-text-primary);
		border: 1px solid  var(--theme-text-primary);
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
	<select bind:value={selected}>
		{#each components as c}
			<option value={c}>{c.name}</option>
		{/each}
	</select>

	<div class="chart">
		<svelte:component this={selected.component} graph={selected.data}/>
	</div>
{/await}