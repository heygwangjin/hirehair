<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>미용사 채용정보 - 헤어피플</title>

	<meta name="Description" content="헤어피플에서 제공하는 지역별 미용사 채용정보 서비스 입니다." />
</svelte:head>

<div class="container-head desktop">
	<h1>채용정보</h1>
</div>
<h2>오늘의 채용정보</h2>
<div class="grid-container">
	{#each Array(40) as item}
		<a href="#">
			<article class="card">
				<!-- 미용실 이미지 -->
				<figure class="salon-image">
					<img src="./nows.png" alt="헤어피플 미용실 사진" />
				</figure>

				<div class="content">
					<header>
						<!-- 미용실 이름 -->
						<strong>나우즈(NOWS)</strong>
						<!-- 공고 제목 -->
						<h3 class="title">헤어 디자이너 모집</h3>
					</header>

					<section>
						<!-- 모집 분야 -->
						<div class="truncate">
							<ul>
								<li class="position">헤어디자이너[실장]</li>
								<li class="position">헤어디자이너[신입]</li>
								<li class="position">헤어디자이너[경력]</li>
								<li class="position">헤어스탭[경력]</li>
							</ul>
						</div>

						<!-- 지역 -->
						<p class="address">경기 수원시 영통구</p>
					</section>

					<!-- 급여 및 찜 버튼 -->
					<footer>
						<p class="salary">월 200만원 이상</p>
						<button type="button" aria-label="찜하기" onclick={() => console.log('clicked')}>
							<Icon name="star" />
						</button>
					</footer>
				</div>
			</article>
		</a>
	{/each}
</div>

<style>
	a {
		color: var(--hp-fg-2);

		&:hover {
			text-decoration: none;
		}
	}

	h2 {
		margin: 1rem 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--hp-border-radius) var(--hp-border-radius) 0 0;
	}

	header {
		margin-bottom: 0.8rem;
	}

	strong {
		font: var(--hp-font-body-small);
		font-weight: normal;
	}

	li {
		display: inline;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		color: var(--hp-fg-3);
		cursor: pointer;
	}

	.container-head {
		padding: 2rem 0 0 0;
	}

	.desktop {
		display: none;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.card {
		border: 1px solid #f0f0f0;
		border-radius: var(--hp-border-radius);
		background: var(--hp-bg-1);
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

		&:hover {
			box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
		}
	}

	.salon-image {
		width: 100%;
		height: 18rem;
		border-radius: var(--hp-border-radius);
		border-bottom: 2px solid var(--hp-border);
	}

	.content {
		padding: 1rem;
	}

	.title {
		margin: 0.4rem 0 0 0;
	}

	.truncate {
		width: 23.5rem;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.truncate ul {
		display: inline;
	}

	.position {
		color: var(--hp-fg-3);
		font: var(--hp-font-body-small);
	}

	.position:not(:last-child)::after {
		padding: 0 0.15rem 0 0.5rem;
		content: '·';
	}

	.address {
		font: var(--hp-font-body-small);
	}

	.salary {
		font: var(--hp-font-body);
	}

	@media screen and (min-width: 1024px) {
		.desktop {
			display: block;
		}

		h2 {
			margin: 4rem 0 2rem 0;
		}
	}

	@media screen and (max-width: 1024px) {
		.grid-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
