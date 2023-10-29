import {getContext, setContext} from "svelte";
import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {Page} from "@sveltejs/kit";

export const CONTEXT_KEYS = {
    toolbar: Symbol()
}


export interface ToolbarLink {
    href?: string
    onclick?: () => void;
    disabled?: (page:Page) => boolean;
    visible?: (page:Page) => boolean;
    title?: string;
    icon?: any;
}

export function initToolbarStore(initialValue: ToolbarLink[] = []) {
    const toolbarStore = writable<ToolbarLink[]>(initialValue);
    return setContext(CONTEXT_KEYS.toolbar, toolbarStore)
}

export function getToolbarStore() {
    return getContext<Writable<ToolbarLink[]>>(CONTEXT_KEYS.toolbar)
}