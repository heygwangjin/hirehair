<script lang="ts">
	import '../app.css';
	import Shell from '$lib/components/Shell.svelte';
	import Nav from '$lib/nav/Nav.svelte';

	let { data, children: layout_children } = $props();
</script>

<Shell>
	{#snippet top_nav()}
		<Nav title={data.nav_title} links={data.nav_links} />
	{/snippet}

	{#snippet children()}
		{@render layout_children()}
	{/snippet}
</Shell>

<style>
	@font-face {
		display: swap;
		font-family: 'Pretendard';
		src: url('$lib/fonts/PretendardVariable.woff2');
		font-weight: 45 920;
	}

	:root {
		font-family: 'Pretendard', sans-serif;
	}
</style>
