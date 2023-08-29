export interface CurrentUser {
    id: number
    name: string
    picture: string
    lang: string
}

export interface DeezerPlaylist {
    id: number
    title: string
    duration: number
    public: boolean
    is_loved_track: boolean
    collaborative: boolean
    nb_tracks: number
    fans: number
    link: string
    picture: string
    picture_small: string
    picture_medium: string
    picture_big: string
    picture_xl: string
    checksum: string
    tracklist: string // tracklist url
    creation_date: string
    md5_image: string
    picture_type: string
    time_add: number
    time_mod: number
    creator: {
        id: number
        name: string
        tracklist: string
        type: "user"
    }
    type: "playlist"
}

export interface DeezerArtist {
    id: number
    name: string
    link: string
    tracklist: string
    type: "artist"
    picture_small: string
}

export interface DeezerAlbum {
    id: number
    title: string
    cover: string
    cover_small: string
    cover_medium: string
    cover_big: string
    cover_xl: string
    md5_image: string
    tracklist: string
    release_date: string
    type: "album"
}

export interface DeezerTrack {
    id: number
    readable: boolean
    title: string
    title_short: string
    title_version: string
    link: string
    duration: number
    rank: number
    explicit_lyrics: false
    explicit_content_lyrics: number
    explicit_content_cover: number
    preview: string
    md5_image: string
    time_add: number
    artist: DeezerArtist
    album: DeezerAlbum
    type: "track"
}

export interface DeezerPlaylistDetails extends DeezerPlaylist {
    description: string
    tracks: {
        data: DeezerTrack[]
    }
}