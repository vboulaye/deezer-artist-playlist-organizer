// https://connect.deezer.com/oauth/auth.php?app_id={env.p}&redirect_uri=http://yd-5cg9375wtp.local/auth/callback/deezer&perms=basic_access,email,manage_library,delete_library,listening_history,manage_community&response_type=token


import {env} from "$env/dynamic/private";
import {setCookie} from "$lib/CookieManager";
import {DeezerConfig} from "$lib/DeezerConfig";
import {json, redirect} from '@sveltejs/kit';
import type {RequestEvent} from '@sveltejs/kit';

export async function GET({request, cookies, fetch, locals, url}: RequestEvent) {

    const deezerAuthorizationUrl = DeezerConfig.AUTHORIZATION_URL
    const deezerApplicationId = env.DEEZER_ID
    const redirectUrl = `${env.ORIGIN}/auth/callback`;
    const permissions = `basic_access,email,manage_library,delete_library,listening_history,manage_community`;

    const authorizationUrl = `${deezerAuthorizationUrl}?app_id=${deezerApplicationId}&redirect_uri=${redirectUrl}&perms=${permissions}&output=json`

    setCookie(cookies, 'deezer-artist-playlist-organizer-redirect', url.searchParams.get("redirect") || '/');

    throw redirect(302, authorizationUrl);
}