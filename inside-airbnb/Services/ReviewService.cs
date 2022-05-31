using inside_airbnb.Cache;
using inside_airbnb.Models;
using System.Text.Json;

namespace inside_airbnb.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewCache _reviewCache;
        private readonly IReviewRepository _reviewRepository;

        public ReviewService(IReviewCache reviewCache, IReviewRepository reviewRepository)
        {
            _reviewCache = reviewCache;
            _reviewRepository = reviewRepository;
        }

        public async Task<YearReviews> GetNrOfReviewsPerYear()
        {
            YearReviews yearReviews;
            string cachedYearReviewsString = await _reviewCache.GetReviewsPerYearFromCacheAsync();

            if (!string.IsNullOrEmpty(cachedYearReviewsString))
            {
                yearReviews = JsonSerializer.Deserialize<YearReviews>(cachedYearReviewsString) ?? new();
            }
            else
            {
                yearReviews = await _reviewRepository.GetNrOfReviewsPerYear();

                await _reviewCache.AddReviewsPerYearToCacheAsync(yearReviews);
            }

            return yearReviews;
        }
    }
}
