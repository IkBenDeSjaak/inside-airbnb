using inside_airbnb.Helpers;
using inside_airbnb.Models;
using Microsoft.Extensions.Caching.Distributed;

namespace inside_airbnb.Cache
{
    public class ListingCache : IListingCache
    {
        private readonly IDistributedCache _distributedCache;

        private const string CacheKeyListings = "listings";
        private const string CacheKeyNeighbourhoodPrices = "neighbourhoodPrices";
        private const string CacheKeyNeighbourhoodListings = "neighbourhoodListings";
        private const string CacheKeyRoomListings = "roomListings";

        public ListingCache(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async Task<string> GetListingsFromCacheAsync(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews)
        {
            
            return await _distributedCache.GetDataFromCacheAsync($"{CacheKeyListings}-{neighbourhood}-{minPrice}-{maxPrice}-{numberOfReviews}");
        }

        public async Task AddListingsToCacheAsync(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews, List<ListingLocation> listings)
        {
            await _distributedCache.AddDataToCacheAsync($"{CacheKeyListings}-{neighbourhood}-{minPrice}-{maxPrice}-{numberOfReviews}", listings, 100);
        }
        
        public async Task<string> GetNeighbourhoodPricesFromCacheAsync()
        {
            return await _distributedCache.GetDataFromCacheAsync(CacheKeyNeighbourhoodPrices);
        }

        public async Task AddNeighbourhoodPricesToCacheAsync(NeighbourhoodPrices neighbourhoodPrices)
        {
            await _distributedCache.AddDataToCacheAsync(CacheKeyNeighbourhoodPrices, neighbourhoodPrices, 100);
        }

        public async Task<string> GetNeighbourhoodListingsFromCacheAsync()
        {
            return await _distributedCache.GetDataFromCacheAsync(CacheKeyNeighbourhoodListings);
        }

        public async Task AddNeighbourhoodListingsToCacheAsync(NeighbourhoodListings neighbourhoodListings)
        {
            await _distributedCache.AddDataToCacheAsync(CacheKeyNeighbourhoodListings, neighbourhoodListings, 100);
        }

        public async Task<string> GetRoomListingsFromCacheAsync()
        {
            return await _distributedCache.GetDataFromCacheAsync(CacheKeyRoomListings);
        }

        public async Task AddRoomListingsToCacheAsync(RoomListings roomListings)
        {
            await _distributedCache.AddDataToCacheAsync(CacheKeyRoomListings, roomListings, 100);
        }
    }
}
