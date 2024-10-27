import {traceDuration} from "$lib/Debug";
import type {DeezerPlaylist} from "$lib/DeezerApiModel";
import {callDeezer} from "$lib/DeezerCall";
import type {PaginatedResult} from "$lib/PaginationUtils";
import {appendIndexToPaginationResults, extractPaginationIndex, getRemainingPages} from "$lib/PaginationUtils";
import type {PageLoadEvent} from "./$types";

export const ssr = false

export async function load({url}: PageLoadEvent): Promise<{ playlists: PaginatedResult<DeezerPlaylist> }> {

    console.error({xxx: url.searchParams})
    const startIndex = extractPaginationIndex(url);

    const search = url.searchParams.get("search");

    if (search) {
        return {
            playlists: await callDeezer<PaginatedResult<DeezerPlaylist>>({
                apiPath: `/search/playlist`,
                searchParams: {
                    q: search,
                    limit: 1000,
                    index: startIndex ?? 0,
                }
            })
                .then(result => appendIndexToPaginationResults<DeezerPlaylist>(result, startIndex || 0))
        }
    }

    if (startIndex) {
        return {
            playlists: await callDeezer<PaginatedResult<DeezerPlaylist>>({
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
        playlists: await traceDuration("getRemainingPages:",
            async () => await getRemainingPages<DeezerPlaylist>({
                apiPath: `/user/me/playlists`,
                limit: 500,
                index: 0,
            }))
    }
}
