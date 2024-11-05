<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<section>
	<div class="inner">{@render children?.()}</div>
</section>

<style>
	section {
		position: relative;
		padding: 2.4rem 0;
	}

	section::after {
		content: '';
		display: table;
		clear: both;
	}

	@media screen and (min-width: 1024px) {
		section {
			padding: 4.8rem 0;
		}
	}
</style>
