# deezer-artist-playlist-organizer

a little app to manage the artists playlist in deezer


# development

to test the auth, you need to get an app key from deezer (https://developers.deezer.com/myapps) :
it does not like ngrok.io in the host name
and you need to expose the app on port 80.

I use  local-tunnel to expose the local port on the internet: `\lt --port 5173 --subdomain deezer-artist-playlist-organizer`
This can be launched from the project using `pnpm run tunnel`

So I configure the application with:

- application domain: loca.lt
- redirect url: https://deezer-artist-playlist-organizer.loca.lt/auth/callback
- tos url: https://deezer-artist-playlist-organizer.loca.lt/tos

then store the application id / secret in variables in `.env` at the root of the project.
see .env.example for all the variables to be defined


Or use localhost + local reverse proxy
```
sudo socat TCP-LISTEN:80,reuseaddr,fork,su=nobody TCP:127.0.0.1:5173
```

- application domain: localhost
- redirect url: http://localhost/auth/callback
- tos url: https://localhost/tos

                          
icons from https://icon-sets.iconify.design/ph                                                                                                                    