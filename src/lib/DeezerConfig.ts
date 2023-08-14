import {env} from "$env/dynamic/private";

export const DeezerConfig = {
    AUTHORIZATION_URL: env.DEEZER_AUTHORIZATION_URL,
    TOKEN_URL: env.DEEZER_TOKEN_URL,

}