<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';
	import { search_query, searching } from '$lib/stores/search';

	let search_input: HTMLInputElement;
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'k' && (navigator.platform === 'MacIntel' ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();

			if ($searching) {
				search_input.blur();
				$searching = false;
			} else {
				search_input.focus();
				$searching = true;
			}
		}

		if (e.code === 'Escape' && $searching) {
			search_input.blur();
		}
	}}
/>

<div class="search-container {$searching ? 'searching' : ''}">
	<input
		bind:this={search_input}
		onfocusin={() => {
			$searching = true;
		}}
		onfocusout={() => {
			$searching = false;
		}}
		bind:value={$search_query}
		class="search-input"
		type="text"
		placeholder="채용공고 검색"
	/>
	<button>
		<SearchIcon size={18} strokeWidth={1} />
	</button>
</div>

<style>
	.search-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.4rem;
		width: 16rem;
		border: 1px solid var(--hh-input);
		border-radius: var(--radius);
	}

	.searching {
		border-color: var(--hh-ring);
	}

	.search-input {
		height: 2.5rem;
		padding: 0.2rem 0.4rem;
		border-radius: var(--radius);
		font-size: 0.875rem;

		&:focus {
			outline: none;
		}
	}
</style>
