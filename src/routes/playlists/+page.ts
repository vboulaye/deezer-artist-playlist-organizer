import {traceDuration} from "$lib/Debug";
import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {appendIndexToPaginationResults, extractPaginationIndex, getRemainingPages} from "$lib/PaginationUtils";
import {error} from "@sveltejs/kit";
import type {PageLoadEvent} from "./$types";

export const ssr = false

export async function load({url}: PageLoadEvent) {

    const startIndex = extractPaginationIndex(url);

    const search = url.searchParams.get("search");

    if (search) {
        return {
            playlists: callDeezer<PaginatedResult<DeezerPlaylist>>({
                apiPath: `/search/playlist`,
                searchParams: {
                    q: search,
                    limit: 1000,
                    index: startIndex || 0,
                }
            })
                .then(result => appendIndexToPaginationResults(result, startIndex||0))
        }
    }

    if (startIndex) {
        return {
            playlists: callDeezer<PaginatedResult<DeezerPlaylist>>({
                apiPath: `/user/me/playlists`,
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
            limit: 500,
            index: 0,
        }))
    }
}
