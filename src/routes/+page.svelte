<svelte:head>
	<title>헤어피플 | 미용전문 구인구직 플랫폼</title>
	<meta name="Description" content="미용 구인구직은 헤어피플에서" />
</svelte:head>

<div class="main-banner-container">
	<div class="main-banner-subcontainer">
		<h1>가까운 곳에서 <br />시작하는 새로운 기회</h1>
		<h2>내 주변 일자리를 한눈에 확인해보세요.</h2>
	</div>
</div>

<style>
	h1 {
		font: var(--hp-font-banner-h1);
	}

	h2 {
		font: var(--hp-font-banner-h2);
	}

	.main-banner-container {
		position: relative;
		height: var(--hp-banner-height);
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		background: var(--hp-bg-3);
	}

	.main-banner-subcontainer {
		margin: 0 auto;
		height: 100%;
		max-width: var(--hp-page-max-width);
		padding: var(--hp-banner-padding-block) var(--hp-banner-padding-side);
	}
</style>
