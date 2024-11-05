import type { NavigationLink } from '$lib/types';

const nav_links: NavigationLink[] = [
	{
		title: '채용정보',
		slug: 'jobs'
	},
	{
		title: '인재정보',
		slug: 'seekers'
	}
];

const sections: Record<string, string> = {
	jobs: '채용정보',
	seekers: '인재정보'
};

export const load = async ({ url, fetch }) => {
	const nav_title = sections[url.pathname.split('/')[1]!] ?? '';

	return {
		nav_title,
		nav_links
	};
};
