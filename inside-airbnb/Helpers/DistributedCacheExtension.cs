using Microsoft.Extensions.Caching.Distributed;
using System.Text.Json;

namespace inside_airbnb.Helpers
{
    public static class DistributedCacheExtension
    {
        public static async Task<string> GetDataFromCache(this IDistributedCache distributedCache, string cacheKey)
        {
            return await distributedCache.GetStringAsync(cacheKey);
        }

        public static async Task AddDataToCache<T>(this IDistributedCache distributedCache, string cacheKey, T data, int expiresInSeconds)
        {
            string dataString = JsonSerializer.Serialize(data);

            await distributedCache.SetStringAsync(cacheKey, dataString, new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(expiresInSeconds)
            });
        }
    }
}
