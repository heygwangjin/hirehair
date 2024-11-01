<!-- @component
Top navigation bar for the application. It provides a slot for the left side, the right side, and the center.
-->

<script lang="ts">
	import type { NavigationLink } from '$lib/types';
	import { page } from '$app/stores';
	import Search from '$lib/search/Search.svelte';

	interface Props {
		home_title?: string;
		title: string | undefined;
		links: NavigationLink[];
	}

	let { home_title = 'Homepage', title, links }: Props = $props();
</script>

<nav>
	<div class="links">
		<a class="home-link" href="/" title={home_title} aria-label="HireHair">HireHair</a>

		{#each links as link}
			<a
				href="/{link.slug}"
				aria-current={$page.url.pathname.startsWith(`/${link.slug}`) ? 'page' : null}
			>
				{link.title}
			</a>
		{/each}
	</div>

	<div class="menu">
		<Search />
		<a href="/signin">로그인</a>
		<a href="/signup">회원가입</a>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		display: flex;
		top: 0;
		z-index: 101;
		width: 100vw;
		height: var(--hh-nav-height);
		margin: 0 auto;
		padding: 0 var(--hh-page-padding-side);
		background-color: hsl(0, 0%, 100%);
		user-select: none;
		isolation: isolate;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: auto;
			width: 100%;
			height: 4px;
			bottom: -4px;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent);
		}
	}

	.menu {
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		gap: 1.2rem;
	}

	.home-link {
		font-size: 1.775rem;
		font-family: 'Noto Serif', serif;
	}

	@media (min-width: 1024px) {
		.home-link {
			width: 9.2rem;
		}
	}

	.links {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 1rem;

		a {
			color: var(--hh-primary);
			white-space: nowrap;
			height: 100%;
			display: flex;
			align-items: center;
			text-decoration: none;
			outline-offset: -2px;
			padding: 0.1rem 0.8rem 0 0.8rem;
			font-weight: bold;

			&:hover {
				box-shadow: inset 0 -1px 0 0 var(--hh-muted);
			}

			&[aria-current='page'] {
				color: var(--hh-primary);
				box-shadow: inset 0 -1px 0 0 currentColor;
			}
		}
	}
</style>
