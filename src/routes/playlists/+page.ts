import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import {appendIndexToPaginationResults, extractPaginationIndex} from "$lib/PaginationUtils";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {error} from "@sveltejs/kit";
import type {PageLoad} from "./$types";


export const ssr = false

export async function load({parent, url}: PageLoad) {
    const {session} = await parent();
    const startIndex = extractPaginationIndex(url);
    if (!session?.token?.access_token) {
        throw error(500, "no access token in session")
    }

    return {
        playlists: callDeezer<PaginatedResult<DeezerPlaylist>>({
            apiPath: `/user/${session.user.id}/playlists?index=${startIndex}&limit=1000`,
            accessToken: session.token.access_token
        })
            .then(result => appendIndexToPaginationResults(result, startIndex))
    }

}