// https://connect.deezer.com/oauth/auth.php?app_id={env.p}&redirect_uri=http://yd-5cg9375wtp.local/auth/callback/deezer&perms=basic_access,email,manage_library,delete_library,listening_history,manage_community&response_type=token


import {deleteCookie} from "$lib/CookieManager";
import type {RequestEvent} from '@sveltejs/kit';
import {redirect} from '@sveltejs/kit';

export async function GET({request, cookies, fetch, locals, url}: RequestEvent) {
    deleteCookie(cookies, 'deezer-artist-playlist-organizer-token');
    deleteCookie(cookies, 'deezer-artist-playlist-organizer-redirect');
    await locals.session.set({ });
    throw redirect(302, '/');
}