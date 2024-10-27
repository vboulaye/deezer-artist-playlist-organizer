import {browser} from "$app/environment";
import {TokenCookie} from "$lib/CookieManager";
import {ROOT_LOGGER} from "$lib/Debug";
import {DeezerConfig} from "$lib/DeezerConfig";
import {error} from "@sveltejs/kit";
import fetchJsonp from "fetch-jsonp";
import Bottleneck from "bottleneck";

const LOGGER = ROOT_LOGGER.extend('call-deezer')


const limiter = new Bottleneck({
    reservoir: 50, // initial value
    reservoirRefreshAmount: 50,
    reservoirRefreshInterval: 5 * 1000, // must be divisible by 250

    // // also use maxConcurrent and/or minTime for safety
    // maxConcurrent: 1,
    // minTime: 333 // pick a value that makes sense for your use case
});

async function fetchDeezer(url: URL) {
    if (browser) {
        url.searchParams.set("output", "jsonp")
        LOGGER({fetchJsonp: url.toString()})
        console.log("fetchDeezer: " + url.toString())
        const response = await fetchJsonp(url.toString(), {
            timeout: 10000,
        })
        if (!response.ok) {
            error(500, "error in jsonp call " + url.pathname);
        }
        return response;
    } else {
        LOGGER({fetch: url})
        return await fetch(url);
    }
}

const limitedFetchDeezer = limiter.wrap(fetchDeezer)

export interface DeezerSearchParams {
    [k: string]: string | number | boolean
}

export async function callDeezer<T>(req: {
    apiPath: string,
    searchParams?: DeezerSearchParams
}): Promise<T> {
    LOGGER(`calling ${req.apiPath}`)
    const url = new URL(req.apiPath, DeezerConfig.API_URL);
    const accessToken = TokenCookie.get()
    if (!accessToken) {
        error(500, "no accessToken in cookies");
    }
    url.searchParams.set("access_token", accessToken)
    if (req.searchParams) {
        Object.entries(req.searchParams)
            .forEach(([key, value]) => {
                url.searchParams.set(key, value ? encodeURIComponent(value) : "")
            })
    }

    const response = await limitedFetchDeezer(url);
    const responseData = await response.json();
    LOGGER(`call response`, responseData)
    if (responseData.error) {
        error(500, "error in deezer call " + url.pathname + ": " + JSON.stringify(responseData.error));
    }
    return responseData
}