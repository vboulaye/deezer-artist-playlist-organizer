import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import {appendIndexToPaginationResults, extractPaginationIndex} from "$lib/PaginationUtils";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {error} from "@sveltejs/kit";
import type {PageLoad} from "./$types";


export const ssr = false

export async function load({parent, params, url}: PageLoad) {
    const {session} = await parent();
    if (!session?.token?.access_token) {
        throw error(500, "no access token in session")
    }

    const playlistId = params.id;

    console.log("call")
    return {
        playlist: callDeezer<DeezerPlaylist>({
            apiPath: `/playlist/${playlistId}`,
            accessToken: session.token.access_token
        })
    }

}