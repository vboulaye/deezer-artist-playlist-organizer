import {browser} from "$app/environment";
import {ROOT_LOGGER} from "$lib/Debug";
import {error} from "@sveltejs/kit";
import fetchJsonp from "fetch-jsonp";

const LOGGER = ROOT_LOGGER.extend('call-deezer')
export const API_URL = "https://api.deezer.com"

async function fetchDeezer(url: URL) {
    if (browser) {
        url.searchParams.set("output", "jsonp")
        console.log({fetchJsonp: url.toString()})
        const response = await fetchJsonp(url.toString());
        if (!response.ok) {
            throw error(500, "error in jsonp call " + url.pathname)
        }
        return response;
    } else {
        console.log({fetch: url})
        return await fetch(url);
    }
}

export async function callDeezer<T>(req: {
    apiPath: string,
    accessToken?: string,
}): Promise<T> {
    if (!req.accessToken) {
        throw error(500, "no access_token in session")
    }
    LOGGER(`calling ${req.apiPath}`)
    const url = new URL(req.apiPath, API_URL);
    url.searchParams.set("access_token", req.accessToken)

    const response = await fetchDeezer(url);
    const responseData = await response.json();
    LOGGER(`call response`, responseData)
    if (responseData.error) {
        throw error(500, "error in deezer call " + url.pathname + ": " + JSON.stringify(responseData.error))
    }
    return responseData
}