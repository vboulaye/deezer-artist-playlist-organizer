import {env} from "$env/dynamic/public";

export const DeezerConfig = {
    AUTHORIZATION_URL: env.PUBLIC_DEEZER_AUTHORIZATION_URL || "https://connect.deezer.com/oauth/auth.php",
    TOKEN_URL: env.PUBLIC_DEEZER_TOKEN_URL || "https://connect.deezer.com/oauth/access_token.php",
}