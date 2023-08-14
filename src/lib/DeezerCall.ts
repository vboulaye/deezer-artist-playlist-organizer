import {browser} from "$app/environment";
import {ROOT_LOGGER} from "$lib/Debug";
import {error} from "@sveltejs/kit";
import fetchJsonp from "fetch-jsonp";

const LOGGER = ROOT_LOGGER.extend('callDeezer')
export const API_URL = "https://api.deezer.com"

async function fetchDeezer(url: URL) {
    if (browser) {
        url.searchParams.set("output", "jsonp")
        return await fetchJsonp(url.toString());
    } else {
        return await fetch(url);
    }
}

export async function callDeezer(req: {
    apiPath: string,
    accessToken?: string,
}): Promise<unknown> {
    if (!req.accessToken) {
        throw error(500, "no access_token in session")
    }
    LOGGER(`calling ${req.apiPath}`)
    const url = new URL(req.apiPath, API_URL);
    url.searchParams.set("access_token", req.accessToken)
    console.log({xxx: url.toString()})

    const response = await fetchDeezer(url);
    const responseText = await response.json();
    LOGGER(`response ${responseText}`)
    return responseText
}