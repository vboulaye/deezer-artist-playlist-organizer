import {env} from "$env/dynamic/private";
import {callDeezer} from "$lib/DeezerCall";
import {DeezerConfig} from "$lib/DeezerConfig";
import type {RequestEvent} from '@sveltejs/kit';
import {error, redirect} from '@sveltejs/kit';

export async function GET({request, cookies, fetch, locals, route, url}: RequestEvent) {
    const code = url.searchParams.get("code");

    const deezerTokenUrl = DeezerConfig.TOKEN_URL
    const deezerApplicationId = env.DEEZER_ID
    const deezerSecret = env.DEEZER_SECRET
    const tokenUrl = `${deezerTokenUrl}?app_id=${deezerApplicationId}&secret=${deezerSecret}&code=${code}&output=json`

    const tokenResponse = await fetch(tokenUrl);
    const tokenText = await tokenResponse.text();
    try {
        const token = JSON.parse(tokenText);
        token.expiresOn = new Date(Date.now() + token.expires * 1000).toISOString()
        console.log("read token" , token)
        await locals.session.update(data => ({...data, token}));

    } catch (e) {
        throw error(500, "authentification failure: " + e + " - " + tokenText)
    }

    if (!locals.session.data.token) {
        throw error(500, "missing token in session: ")
    }

    const userResponse = await callDeezer({apiPath: "/user/me", accessToken: locals.session.data.token.access_token});
    const {id, name, picture, lang} = userResponse as any
    const user = {
        id, name, picture, lang
    }
    await locals.session.update(data => ({...data, user}));

    console.log({user})
    const redirectPostAuth = locals.session.data.redirectPath || '/';
    console.log({redirectPostAuth})
    throw redirect(302, redirectPostAuth)
}