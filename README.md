# deezer-artist-playlist-organizer

a little app to manage the artists playlist in deezer


# development

to test the auth, you need to get an app key from deezer :

and you need to expose the app on port 80.

-I use ngrok for this.- ngrok is not accepted by the deezer auth 
I use  local-tunnel for this: `\lt --port 5173 --subdomain deezer-artist-playlist-organizer`

- application domain: eu.ngrok.io
- redirect url: https://deezer-artist-playlist-organizer.loca.lt/auth/callback
- tos url: https://deezer-artist-playlist-organizer.loca.lt/tos

then store the application id in the DEEZER_ID variable in `.env` at the root of the project