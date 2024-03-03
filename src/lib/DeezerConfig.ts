import  {
    PUBLIC_DEEZER_AUTHORIZATION_URL,PUBLIC_DEEZER_TOKEN_URL,PUBLIC_DEEZER_API_URL
} from "$env/static/public";

export const DeezerConfig = {
    AUTHORIZATION_URL: PUBLIC_DEEZER_AUTHORIZATION_URL || "https://connect.deezer.com/oauth/auth.php",
    TOKEN_URL: PUBLIC_DEEZER_TOKEN_URL || "https://connect.deezer.com/oauth/access_token.php",
    API_URL: PUBLIC_DEEZER_API_URL || "https://api.deezer.com",
}