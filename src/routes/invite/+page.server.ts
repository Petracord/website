import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ request }) => {
	const userAgent = request.headers.get('user-agent');
	if (!userAgent?.includes('Discordbot')) {
		throw redirect(301, 'https://discord.gg/TcXBVgepFD');
	}
};
