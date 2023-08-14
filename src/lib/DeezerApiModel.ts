
export interface DeezerPlaylist {
    id: number
    title: string
    description?: string
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
    },
    type: "playlist"
}
