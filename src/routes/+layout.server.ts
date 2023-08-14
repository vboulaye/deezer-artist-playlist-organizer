import type {LayoutServerLoad} from "./$types"

export const load: LayoutServerLoad = async ({locals, request}) => {
    return {
        session: locals.session.data,
    }
}