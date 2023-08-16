import debug from 'debug';

export const ROOT_LOGGER: debug.Debugger = debug('deezer-playlist')

export const traceDuration = async (description: string, lambda:  () => any) => {
    const startTime = Date.now()
    try {
        return await lambda()
    } finally {
        const endTime = Date.now()
        console.warn(`### calling ${description} took ${endTime - startTime}ms`)
    }
}