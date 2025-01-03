<!-- @component
Top navigation bar for the application. It provides a slot for the left side, the right side, and the center.
-->

<script lang="ts">
	import type { NavigationLink } from '$lib/types';
	import { page } from '$app/stores';
	import Search from '$lib/search/Search.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MobileMenu from './MobileMenu.svelte';

	interface Props {
		home_title?: string;
		title: string | undefined;
		links: NavigationLink[];
	}

	let { home_title = 'Homepage', title, links }: Props = $props();
</script>

<header>
	<nav>
		<a class="home-link" href="/" title={home_title} aria-label="HairPeople">헤어피플</a>
		<p class="title">{title}</p>

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
</header>

<MobileMenu />

<style>
	nav {
		display: flex;
		height: var(--hp-nav-height);
		padding: 0 var(--hp-page-padding-side);
		max-width: var(--hp-page-max-width);
		margin: 0 auto;
	}

	a {
		font: var(--hp-font-body);
		color: var(--hp-fg-3);
	}

	header {
		position: fixed;
		top: 0;
		z-index: 101;
		width: 100vw;
		background-color: var(--hp-bg-1);
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

	.title {
		display: flex;
		align-items: center;
		font: var(--hp-font-body-large);
		color: var(--hp-fg-1);
		padding: 0 0.4rem;
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
		font: var(--hp-font-logo);
		color: var(--hp-fg-1);
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
			font: var(--hp-font-body);
			white-space: nowrap;
			height: 100%;
			display: flex;
			align-items: center;
			text-decoration: none;
			outline-offset: -2px;
			font-weight: 600;

			padding: 0.1rem 1.6rem 0 1.6rem;

			&:hover {
				box-shadow: inset 0 -1px 0 0 var(--hp-border);
			}

			&[aria-current='page'] {
				color: var(--hp-fg-accent);
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
			margin-right: 2.4rem;
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

		.title {
			display: none;
		}
	}
</style>
