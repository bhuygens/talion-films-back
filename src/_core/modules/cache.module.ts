import {caching} from "cache-manager";


const memoryCache = caching('memory', {
  max: 100,
  ttl: 3600000 // TTL: 1h
});

export class CacheModule {

  public static async set(key: string, value: any) {
    await (await memoryCache).set(key, value);
  }

  public static async get<T>(key: string): Promise<T> {
    return await (await memoryCache).get(key);
  }

}