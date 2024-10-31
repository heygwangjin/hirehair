<script lang="ts">
	import '../app.css';
	import Shell from '$lib/components/Shell.svelte';

	let { children: layout_children } = $props();
</script>

<Shell>
	{#snippet children()}
		{@render layout_children()}
	{/snippet}
</Shell>

<style>
	@font-face {
		font-family: 'Pretendard';
		src: url('$lib/fonts/PretendardVariable.woff2');
		font-weight: 45 920;
	}

	:root {
		font-family: 'Pretendard', sans-serif;
	}
</style>
