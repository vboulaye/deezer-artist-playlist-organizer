import {env} from "$env/dynamic/private";

export const DeezerConfig = {
    AUTHORIZATION_URL: env.DEEZER_AUTHORIZATION_URL || "https://connect.deezer.com/oauth/auth.php",
    TOKEN_URL: env.DEEZER_TOKEN_URL || "https://connect.deezer.com/oauth/access_token.php",
}