import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { isBotUserAgent } from '$lib/utils/constants';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ request }) => {
	const { headers } = request;

	const userAgent = headers.get('User-Agent') ?? headers.get('user-agent');
	if (!userAgent || !isBotUserAgent(userAgent)) {
		throw redirect(301, env.DISCORD_INVITE);
	}
};
