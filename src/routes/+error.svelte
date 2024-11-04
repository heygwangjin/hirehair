<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	// we don't want to use <svelte:window bind:online> here,
	// because we only care about the online state when
	// the page first loads
	const online = browser ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="outer">
	<div class="inner">
		{#if online}
			{#if $page.status === 404}
				<h1>Not found!</h1>
				<p>요청하신 페이지를 찾을 수 없습니다.</p>
				<p>
					해당 페이지가 존재해야 한다면, <br />
					<a href="/qna"> 문의사항</a>을 남겨주세요!
				</p>
			{:else}
				<h1>Yikes!</h1>

				<p>서버 오류가 발생했습니다. <br /> 페이지를 새로고침해주세요.</p>
				<p>
					에러가 계속 발생한다면, <br />
					<a href="/qna">문의사항</a>을 남겨주세요!
				</p>
			{/if}
		{:else}
			<h1>OFFLINE!</h1>
			<p>인터넷 연결이 되면, <br /> 페이지를 새로고침해주세요.</p>
		{/if}
	</div>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 var(--hh-page-padding-side);
		width: 100%;
		height: 100%;
	}

	.inner {
		max-width: 48rem;
		text-align: center;
		text-wrap: balance;

		a {
			text-wrap: nowrap;
		}
	}

	p {
		margin: 1em auto;
		font: var(--hh-font-body);
	}

	h1 {
		font-weight: 500;
		font-size: 4.2rem;
	}

	@media screen and (min-width: 1024px) {
		p {
			font: var(--hh-font-body-large);
		}

		h1 {
			font-size: 5.4rem;
		}
	}
</style>
