import type { NavigationLink } from '$lib/types';

const nav_links: NavigationLink[] = [
	{
		title: '채용공고',
		slug: 'jobs'
	},
	{
		title: '디자이너',
		slug: 'designers'
	}
];

const sections: Record<string, string> = {
	jobs: '채용공고',
	designers: '디자이너'
};

export const load = async ({ url, fetch }) => {
	const nav_title = sections[url.pathname.split('/')[1]!] ?? '';

	return {
		nav_title,
		nav_links
	};
};
