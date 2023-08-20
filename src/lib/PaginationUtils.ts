import {ROOT_LOGGER, traceDuration} from "$lib/Debug";
import {callDeezer} from "$lib/DeezerCall";


const LOGGER = ROOT_LOGGER.extend('pagination-utils')

export function extractPaginationIndex(url: URL): number | undefined {
    const indexFromSearchParams = url.searchParams.get("index");
    if (!indexFromSearchParams) {
        return undefined
    }
    try {
        return parseInt(indexFromSearchParams)
    } catch (e) {
        LOGGER("unable to parse page index %s from url %s", indexFromSearchParams, url)
        return undefined
    }
}

export interface PaginatedResult<T> {
    data: T[]
    total: number
    prev?: string
    next?: string
    startIndex: number
    endIndex: number
}

export function appendIndexToPaginationResults<T>(result: PaginatedResult<T>, startIndex: number): PaginatedResult<T> {
    result.startIndex = startIndex
    result.endIndex = startIndex + result.data.length
    return result as PaginatedResult<T>
}


export async function getRemainingPages<T>(req: {
    apiPath: string,
    index: number,
    limit: number,
}): Promise<PaginatedResult<T>> {
    // console.log("getRemainingPages", req.index)

    const nextPage = await callDeezer<PaginatedResult<T>>({
        apiPath: req.apiPath,
        searchParams: {
            limit: req.limit,
            index: req.index,
        }
    });
    delete nextPage.prev
    if (nextPage.next) {
        const nextIndex = extractPaginationIndex(new URL(nextPage.next));
        if (nextIndex) {
            delete nextPage.next
            const remainingPages = await getRemainingPages<T>({...req, index: nextIndex});
            nextPage.data = [...nextPage.data, ...remainingPages.data]
        }
    }
    return nextPage

}