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
    private readonly cacheName: string;
    private readonly ttl?: number;

    constructor(cacheName: string, ttl?: number) {
        this.cacheName = cacheName;
        this.ttl = ttl;
    }

    get(cacheKey: K): V | undefined {
        return cache.get({cacheName: this.cacheName, cacheKey})
    }

    put(cacheKey: K, value: V) {
        cache.put({cacheName: this.cacheName, cacheKey}, value, this.ttl)
    }
}