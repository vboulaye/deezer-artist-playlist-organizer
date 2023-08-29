import {browser} from "$app/environment";
import {TokenCookie} from "$lib/CookieManager";
import {ROOT_LOGGER} from "$lib/Debug";
import {DeezerConfig} from "$lib/DeezerConfig";
import {error} from "@sveltejs/kit";
import fetchJsonp from "fetch-jsonp";

const LOGGER = ROOT_LOGGER.extend('call-deezer')

async function fetchDeezer(url: URL) {
    if (browser) {
        url.searchParams.set("output", "jsonp")
        LOGGER({fetchJsonp: url.toString()})
        console.log("fetchDeezer: " + url.toString())
        const response = await fetchJsonp(url.toString(), {
            timeout: 10000,
        })
        if (!response.ok) {
            throw error(500, "error in jsonp call " + url.pathname)
        }
        return response;
    } else {
        LOGGER({fetch: url})
        return await fetch(url);
    }
}

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
        throw error(500, "no accessToken in cookies")
    }
    url.searchParams.set("access_token", accessToken)
    if (req.searchParams) {
        Object.entries(req.searchParams)
            .forEach(([key, value]) => {
                url.searchParams.set(key, "" + value)
            })
    }

    const response = await fetchDeezer(url);
    const responseData = await response.json();
    LOGGER(`call response`, responseData)
    if (responseData.error) {
        throw error(500, "error in deezer call " + url.pathname + ": " + JSON.stringify(responseData.error))
    }
    return responseData
}