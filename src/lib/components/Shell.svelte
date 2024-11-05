<!-- @component
The main shell of the application. It provides a slot for the top navigation, the main content, and the bottom banner.
-->

<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icons from './Icons.svelte';

	let {
		nav_visible = true,
		top_nav,
		children
	}: {
		nav_visible?: boolean;
		top_nav?: Snippet;
		children?: Snippet;
	} = $props();
</script>

<Icons />

{#if nav_visible}
	{@render top_nav?.()}
{/if}

<main id="main" class="main">
	{@render children?.()}
</main>

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: var(--hp-page-padding-block) var(--hp-page-padding-side);
		height: 100%;
		max-width: var(--hp-page-max-width);
		margin: 0 auto;
	}
</style>
