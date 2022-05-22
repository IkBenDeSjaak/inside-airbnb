using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly DbSet<Review> _dbSet;

        public ReviewRepository(InsideAirbnbContext context)
        {
            _dbSet = context.Set<Review>();
        }

        public async Task<YearReviews> GetNrOfReviewsPerYear()
        {
            var reviewsPerYear = await _dbSet
                .GroupBy(review => review.Date.Year, listing => listing.Id, (key, ids) => new { Year = key, NrOfReviews = ids.Count() })
                .OrderBy(date => date.Year)
                .ToListAsync();

            YearReviews yearReviews = new()
            {
                Years = reviewsPerYear.Select(year => year.Year).ToList(),
                NumberOfReviews = reviewsPerYear.Select(year => year.NrOfReviews).ToList()
            };

            return yearReviews;
        }
    }
}
