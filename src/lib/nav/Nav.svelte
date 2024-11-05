<!-- @component
Top navigation bar for the application. It provides a slot for the left side, the right side, and the center.
-->

<script lang="ts">
	import type { NavigationLink } from '$lib/types';
	import { page } from '$app/stores';
	import Search from '$lib/search/Search.svelte';
	import Icon from '$lib/components/Icon.svelte';

	interface Props {
		home_title?: string;
		title: string | undefined;
		links: NavigationLink[];
	}

	let { home_title = 'Homepage', title, links }: Props = $props();
</script>

<nav>
	<a class="home-link" href="/" title={home_title} aria-label="HairPeople">헤어피플</a>

	<div class="desktop">
		<div class="links">
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
	</div>

	<div class="mobile mobile-menu">
		<a href="/search" aria-label="Search">
			<Icon name="search" />
		</a>
		<a href="/users/mypage" aria-label="My Page">
			<Icon name="user" />
		</a>
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
		background-color: var(--hh-bg-2);
		user-select: none;
		isolation: isolate;

		&::after {
			content: '';
			position: absolute;
			top: auto;
			bottom: -4px;
			left: 0;
			width: 100%;
			height: 4px;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), transparent);
		}
	}

	a {
		font: var(--hh-font-body);
		color: var(--hh-fg-3);
	}

	.menu {
		position: relative;
		display: flex;
		width: 100%;
		gap: 1rem;
	}

	.mobile-menu {
		display: flex;
		flex: 1;
		justify-content: end;
		align-items: center;
		padding-top: 0.75rem;
		gap: 1rem;
	}

	.home-link {
		display: flex;
		align-items: center;
		font: var(--hh-font-logo);
		width: 10rem;
		height: 100%;
		text-decoration: none;
	}

	.links {
		display: flex;
		width: 100%;
		align-items: center;

		a {
			color: inherit;
			font: var(--hh-font-body);
			white-space: nowrap;
			height: 100%;
			display: flex;
			align-items: center;
			text-decoration: none;
			outline-offset: -2px;
			font-weight: 600;

			padding: 0.1rem 0.8rem 0 0.8rem;

			&:hover {
				box-shadow: inset 0 -1px 0 0 var(--hh-border);
			}

			&[aria-current='page'] {
				color: var(--hh-fg-accent);
				box-shadow: inset 0 -1px 0 0 currentColor;
			}
		}
	}

	.desktop {
		display: none;
	}

	@media (min-width: 1024px) {
		nav {
			display: grid;
			grid-template-columns: auto 1fr 1fr;
		}

		.home-link {
			margin-right: 3.2rem;
		}

		.menu {
			display: flex;
			width: auto;
			height: 100%;
			align-items: center;
		}

		.menu:last-child {
			justify-content: end;
		}

		.mobile {
			display: none;
		}

		.desktop {
			display: contents;
		}
	}
</style>
