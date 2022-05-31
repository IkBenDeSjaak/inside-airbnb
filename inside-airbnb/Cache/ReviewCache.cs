using inside_airbnb.Helpers;
using inside_airbnb.Models;
using Microsoft.Extensions.Caching.Distributed;

namespace inside_airbnb.Cache
{
    public class ReviewCache : IReviewCache
    {
        private readonly IDistributedCache _distributedCache;
        private const string CacheKeyYearReviews = "yearReviews";

        public ReviewCache(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }

        public async Task<string> GetReviewsPerYearFromCacheAsync()
        {
            return await _distributedCache.GetDataFromCacheAsync(CacheKeyYearReviews);
        }

        public async Task AddReviewsPerYearToCacheAsync(YearReviews yearReviews)
        {
            await _distributedCache.AddDataToCacheAsync(CacheKeyYearReviews, yearReviews, 100);
        }
    }
}
