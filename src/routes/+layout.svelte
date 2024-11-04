<script lang="ts">
	import '$lib/styles/index.css';
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
