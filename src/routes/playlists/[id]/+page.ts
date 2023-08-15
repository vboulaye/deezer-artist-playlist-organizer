import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import {error} from "@sveltejs/kit";
import type {PageLoadEvent} from "./$types";


export const ssr = false

export async function load({parent, params}: PageLoadEvent) {
    const {session} = await parent();
    if (!session?.token?.access_token) {
        throw error(500, "no access token in session")
    }

    const playlistId = params.id;

    return {
        playlist: callDeezer<DeezerPlaylist>({
            apiPath: `/playlist/${playlistId}`,
            accessToken: session.token.access_token
        })
    }

}
