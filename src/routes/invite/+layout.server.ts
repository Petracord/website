import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	throw redirect(301, 'https://discord.gg/TcXBVgepFD');
}
