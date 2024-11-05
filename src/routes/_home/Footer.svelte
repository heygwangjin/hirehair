<script lang="ts">
	import Section from '$lib/components/Section.svelte';
</script>

<Section>
	<div class="policy">
		<a href="/policy/tos">이용약관</a>
		<span>|</span>
		<a href="/policy/privacy">
			<strong>개인정보처리방침</strong>
		</a>
		<span>|</span>
		<a href="/policy/location">
			<strong>위치기반서비스 이용약관</strong>
		</a>
	</div>

	<address>
		<strong>헤어피플</strong>
		<span> 서울특별시 강남구 테헤란로 427 </span>
		<div>
			<span> 대표: 김광진 </span>
			<span>|</span>
			<span>사업자번호: 123-45-67890</span>
		</div>
		<span>통신판매업신고: 제2024-서울강남-1234호</span>
		<div>
			<a href="mailto:hairpeople@gmail.com">hairpeople@gmail.com</a>
			<span>|</span>
			<a href="tel:+821042486811">010-4248-6811</a>
		</div>
		<span class="copyright">Copyright © 2024 헤어피플 All rights reserved.</span>
	</address>
</Section>

<style>
	address {
		display: flex;
		flex-direction: column;
		font-style: normal;
		text-align: center;
		color: var(--hp-fg-3);
		margin-top: 2rem;

		strong {
			margin-bottom: 1rem;
			font-size: var(--hp-font-size-body-small);
		}
	}

	span {
		margin: 0;
		color: var(--hp-fg-3);
	}

	a {
		text-decoration: none;
		color: var(--hp-fg-3);

		strong {
			font-weight: bold;
		}
	}

	.copyright {
		margin-top: 0.8em;
	}

	.policy {
		text-align: center;
		font-size: var(--hp-font-size-body-small);
	}

	@media screen and (min-width: 1024px) {
		address {
			text-align: left;
			font-size: var(--hp-font-size-body-small);

			strong {
				font-size: var(--hp-font-size-body);
			}
		}

		strong {
			margin-bottom: 1.2rem;
		}

		.policy {
			text-align: left;
			font-size: var(--hp-font-size-body);
		}
	}
</style>
