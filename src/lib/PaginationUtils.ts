import {ROOT_LOGGER} from "$lib/Debug";


const LOGGER = ROOT_LOGGER.extend('pagination-utils')

export function extractPaginationIndex(url: URL): number {
    const indexFromSearchParams = url.searchParams.get("index");
    if (!indexFromSearchParams) {
        return 0
    }
    try {
        return parseInt(indexFromSearchParams)
    } catch (e) {
        LOGGER("unable to parse page index %s from url %s", indexFromSearchParams, url)
        return 0
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