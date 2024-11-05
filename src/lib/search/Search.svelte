<script lang="ts">
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
		aria-describedby="search-description"
	/>
</div>

<style>
	input {
		position: relative;
		padding: 0.5em 0.5em 0.4em 1.8em;
		border: none;
		appearance: none;
		-webkit-appearance: none;
		width: 100%;
		height: 3.8rem;
		border-radius: var(--hh-border-radius-inner);
		font: var(--hh-font-body-small);
		background:
			no-repeat 0 55% / 1.3em 1.3em url(../icons/search.svg),
			var(--hh-bg-1);

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: var(--hh-fg-placeholder);
		}
	}

	.search-container {
		display: flex;
		align-items: center;
		padding: 0 1.2rem;
		width: 28rem;
		border: 1px solid var(--hh-border);
		border-radius: var(--hh-border-radius);
	}

	.searching {
		border: 2px solid var(--hh-fg-accent);
	}
</style>
