<script lang="ts">
	import '$lib/styles/index.css';
	import Shell from '$lib/components/Shell.svelte';
	import Nav from '$lib/nav/Nav.svelte';
	import Footer from './_home/Footer.svelte';

	let { data, children: layout_children } = $props();
</script>

<svelte:head>
	<meta
		name="Keywords"
		content="미용사, 미용실, 구인, 구직, 취업, 채용, 구직사이트, 구인사이트, 미용사구인, 미용사구직, 미용실구인, 미용실구직, 헤어인잡, 미용커플"
	/>
</svelte:head>

<Shell>
	{#snippet top_nav()}
		<Nav title={data.nav_title} links={data.nav_links} />
	{/snippet}

	{#snippet children()}
		{@render layout_children()}
	{/snippet}

	{#snippet footer()}
		<Footer />
	{/snippet}
</Shell>
