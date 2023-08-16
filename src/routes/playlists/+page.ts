import {traceDuration} from "$lib/Debug";
import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {appendIndexToPaginationResults, extractPaginationIndex, getRemainingPages} from "$lib/PaginationUtils";
import {error} from "@sveltejs/kit";
import type {PageLoadEvent} from "./$types";


export const ssr = false

export async function load({parent, url}: PageLoadEvent) {
    const {session} = await parent();
    if (!session?.token?.access_token) {
        throw error(500, "no access token in session")
    }

    const startIndex = extractPaginationIndex(url);
    const search = url.searchParams.get("search");

    if (search) {
        return {
            playlists: callDeezer<PaginatedResult<DeezerPlaylist>>({
                apiPath: `/search/playlist`,
                accessToken: session.token.access_token,
                searchParams: {
                    q: search,
                    limit: 1000,
                    index: startIndex || 0,
                }
            })
                .then(result => appendIndexToPaginationResults(result, startIndex))
        }
    }

    if (startIndex) {
        return {
            playlists: callDeezer<PaginatedResult<DeezerPlaylist>>({
                apiPath: `/user/me/playlists`,
                accessToken: session.token.access_token,
                searchParams: {
                    limit: 1000,
                    index: startIndex,
                }
            })
                .then(result => appendIndexToPaginationResults(result, startIndex))
        }
    }


    return {
        playlists: traceDuration("getRemainingPages:", async () => await getRemainingPages<PaginatedResult<DeezerPlaylist>>({
            apiPath: `/user/me/playlists`,
            accessToken: session?.token?.access_token||"",
            limit: 500,
            index: 0,
        }))
    }
}
