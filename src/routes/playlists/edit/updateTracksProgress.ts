import {writable} from "svelte/store";

export interface UpdateTracksProgress {
    message: string
    value: number
    max: number
}
