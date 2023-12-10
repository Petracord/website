import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isBotUserAgent } from '$lib/utils/constants';

export const load: PageServerLoad = async ({ request, setHeaders }) => {
	const { headers } = request;

	const userAgent = headers.get('User-Agent') ?? headers.get('user-agent');
	if (!userAgent || !isBotUserAgent(userAgent)) {
		throw redirect(301, 'https://twitter.com/PentomoClub');
	}

	setHeaders({
		'Cache-Control': 'public, max-age=604800, immutable'
	});
};
