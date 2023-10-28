import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { DISCORD_UA } from '$lib/utils/constants';

export const load: PageServerLoad = ({ request }) => {
	const { headers } = request;

	const userAgent = headers.get('User-Agent') ?? headers.get('user-agent');
	if (userAgent !== DISCORD_UA) {
		throw redirect(301, 'https://discord.gg/TcXBVgepFD');
	}
};
