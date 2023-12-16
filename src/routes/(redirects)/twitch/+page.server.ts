import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	redirect(301, 'https://www.twitch.tv/pentomoclub');
};
