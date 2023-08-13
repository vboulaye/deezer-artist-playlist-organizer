import {ROOT_LOGGER} from "$lib/Debug";
import {DeezerConfig} from "$lib/DeezerConfig";
import {error} from "@sveltejs/kit";

const LOGGER = ROOT_LOGGER.extend('callDeezer')

export async function callDeezer(req: {
    apiPath: string,
    accessToken?: string,
}): Promise<unknown> {
    if (!req.accessToken) {
        throw error(500, "no access_token in session")
    }
    LOGGER(`calling ${req.apiPath}`)
    const url = new URL(req.apiPath, DeezerConfig.API_URL);
    url.searchParams.set("access_token", req.accessToken)
    const response = await fetch(url);
    const responseText = await response.text();
    LOGGER(`response ${responseText}`)
    return JSON.parse(responseText)
}