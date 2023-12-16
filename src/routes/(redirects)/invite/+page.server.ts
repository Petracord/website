import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isBotUserAgent } from '$lib/utils/constants';
import { PUBLIC_DISCORD_INVITE } from '$env/static/public';

export const load: PageServerLoad = async ({ request, fetch, setHeaders }) => {
	const { headers } = request;

	const userAgent = headers.get('User-Agent') ?? headers.get('user-agent');
	if (!userAgent || !isBotUserAgent(userAgent)) {
		redirect(301, PUBLIC_DISCORD_INVITE);
	}

	setHeaders({
		'Cache-Control': 'public, max-age=604800, immutable'
	});

	const response = await fetch(PUBLIC_DISCORD_INVITE, {
		method: 'GET'
	});

	const html = await response.text();
	const match = html.match(
		/https:\/\/cdn\.discordapp\.com\/splashes\/864993757925867530\/(\w+).jpg/
	);
	const splashId = match?.at(1);
	if (!splashId) return;

	return {
		banner: `https://cdn.discordapp.com/splashes/864993757925867530/${splashId}.png?size=512`
	};
};
