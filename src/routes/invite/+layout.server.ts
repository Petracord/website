import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export function load(): LayoutServerLoad {
	throw redirect(301, 'https://discord.gg/TcXBVgepFD');
}
