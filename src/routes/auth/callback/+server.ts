import {env} from "$env/dynamic/private";
import {getCookie, setCookie} from "$lib/CookieManager";
import {callDeezer} from "$lib/DeezerCall";
import {DeezerConfig} from "$lib/DeezerConfig";
import {error, json, redirect} from '@sveltejs/kit';
import type {RequestEvent} from '@sveltejs/kit';

export async function GET({request, cookies, fetch, locals, route, url}: RequestEvent) {
    const code = url.searchParams.get("code");

    const deezerTokenUrl = DeezerConfig.TOKEN_URL
    const deezerApplicationId = env.DEEZER_ID
    const deezerSecret = env.DEEZER_SECRET
    const tokenUrl = `${deezerTokenUrl}?app_id=${deezerApplicationId}&secret=${deezerSecret}&code=${code}&output=json`

    const tokenResponse = await fetch(tokenUrl);
    const tokenText = await tokenResponse.text();
    try {
        const tokenJson = JSON.parse(tokenText);
        console.log("setting cookoie deezer-artist-playlist-organizer-token " + tokenText)
        setCookie(cookies, 'deezer-artist-playlist-organizer-token', tokenJson);
        locals.session.token = tokenJson
    } catch (e) {
        throw error(500, "authentification failure: " + e + " - " + tokenText)
    }

    if (!locals.session.token) {
        throw error(500, "missing token in session: ")
    }

    const user = await callDeezer({apiPath: "/user/me", accessToken: locals.session.token.access_token});
    const {id, name, picture, lang} = user as any
    locals.session.user = {
        id, name, picture, lang
    }
    console.log({user: locals.session.user})
    const redirectPostAuth = getCookie(cookies, 'deezer-artist-playlist-organizer-redirect') || '/';
    console.log({redirectPostAuth})
    throw redirect(302, redirectPostAuth)
}