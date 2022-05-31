using inside_airbnb.Helpers;
using Microsoft.Extensions.Caching.Distributed;

namespace inside_airbnb.Cache
{
    public class NeighbourhoodCache : INeighbourhoodCache
    {
        private readonly IDistributedCache _distributedCache;
        private const string CacheKeyNeighbourhoods = "neighbourhoods";

        public NeighbourhoodCache(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async Task AddNeighbourhoodsToCacheAsync(List<string> neighbourhoods)
        {
            await _distributedCache.AddDataToCacheAsync(CacheKeyNeighbourhoods, neighbourhoods, 100);
        }

        public async Task<string> GetNeighbourhoodsFromCacheAsync()
        {
            return await _distributedCache.GetDataFromCacheAsync(CacheKeyNeighbourhoods);
        }
    }
}
