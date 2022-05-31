using inside_airbnb.Models;

namespace inside_airbnb.Cache
{
    public interface IReviewCache
    {
        Task<string> GetReviewsPerYearFromCacheAsync();
        Task AddReviewsPerYearToCacheAsync(YearReviews yearReviews);
    }
}
