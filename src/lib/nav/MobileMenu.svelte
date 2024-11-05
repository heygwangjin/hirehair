<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<nav>
	<div>
		<a href="/" aria-label="홈 (메인)">
			<Icon name="home" />
		</a>
		<span>홈</span>
	</div>

	<div>
		<a href="/jobs" aria-label="채용정보">
			<Icon name="file-text" />
		</a>
		<span>채용정보</span>
	</div>

	<div>
		<a href="/seekers" aria-label="인재정보">
			<Icon name="users" />
		</a>
		<span>인재정보</span>
	</div>

	<div>
		<a href="/recently-viewed-jobs" aria-label="최근 본 채용정보">
			<Icon name="list" />
		</a>
		<span>최근 본</span>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;
		bottom: 0;
		z-index: 101;
		width: 100vw;
		height: var(--hp-nav-height);
		margin: 0 auto;
		background-color: var(--hp-bg-1);
		user-select: none;
		isolation: isolate;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: -4px;
			width: 100%;
			height: 4px;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.05), transparent);
		}
	}

	a {
		font: var(--hp-font-body);
		color: var(--hp-fg-3);
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		padding: 0.5rem 0;
		line-height: 0.75rem;
		width: 100%;
	}

	span {
		color: var(--hp-fg-3);
	}

	@media screen and (min-width: 1024px) {
		nav {
			display: none;
		}
	}
</style>
