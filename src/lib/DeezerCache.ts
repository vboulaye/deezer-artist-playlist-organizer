import cache from "memory-cache";


export function cacheGet<T>(cacheName: string, cacheKey: unknown): T | undefined {
    return cache.get({cacheName, cacheKey})
}

export function cachePut<T>(cacheName: string, cacheKey: unknown, value: T, ttl?: number): T | undefined {
    return cache.put({cacheName, cacheKey}, value, ttl)
}

export function caching<K, V>(request: { cacheName: string, getter: (k: K) => V, ttl?: number }) {
    return async (key: K) => {
        const fromCache = cacheGet<V>(request.cacheName, key);
        if (fromCache) {
            return fromCache
        }
        const value = await request.getter(key);
        cachePut(request.cacheName, key, value, request.ttl)
        return value;
    }
}

export class DeezerCache<K, V> {

    constructor(private cacheName: string, private ttl?: number) {
    }

    get(cacheKey: K): V | undefined {
        return cache.get(this.buildKey(cacheKey))
    }

    private buildKey(cacheKey: K) {
        return this.cacheName + "~" + cacheKey;
    }

    put(cacheKey: K, value: V) {
        cache.put(this.buildKey(cacheKey), value, this.ttl)
    }
}