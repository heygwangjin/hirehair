<!-- @component
The main shell of the application. It provides a slot for the top navigation, the main content, and the bottom banner.
-->

<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icons from './Icons.svelte';

	let {
		nav_visible = true,
		top_nav,
		children,
		footer
	}: {
		nav_visible?: boolean;
		top_nav?: Snippet;
		children?: Snippet;
		footer?: Snippet;
	} = $props();
</script>

<Icons />

{#if nav_visible}
	{@render top_nav?.()}
{/if}

<main id="main" class="main">
	{@render children?.()}
</main>

{@render footer?.()}

<style>
	main {
		position: relative;
		margin: 0 auto;
		padding: var(--hp-page-padding-block) var(--hp-page-padding-side);
		height: 100%;
		min-height: fit-content; /* Prevents the footer from sticking to the bottom */
		max-width: var(--hp-page-max-width);
	}
</style>
