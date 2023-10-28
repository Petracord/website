import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isBotUserAgent } from '$lib/utils/constants';
import { env } from '$env/dynamic/public';

export const load: PageServerLoad = async ({ request, fetch }) => {
	const { headers } = request;

	const userAgent = headers.get('User-Agent') ?? headers.get('user-agent');
	if (!userAgent || !isBotUserAgent(userAgent)) {
		throw redirect(301, env.PUBLIC_DISCORD_INVITE);
	}

	const response = await fetch(env.PUBLIC_DISCORD_INVITE, {
		method: 'GET'
	});

	const html = await response.text();
	const match = html.match(
		/https:\/\/cdn\.discordapp\.com\/splashes\/864993757925867530\/(\w+).jpg/
	);
	const spashId = match?.at(1);
	if (!spashId) return;

	return {
		banner: `https://cdn.discordapp.com/splashes/864993757925867530/${spashId}.png?size=512`
	};
};
