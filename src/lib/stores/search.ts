import { writable } from 'svelte/store';

export const searching = writable(false);
export const search_query = writable('');
