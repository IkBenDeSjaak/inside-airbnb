using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IReviewRepository
    {
        Task<YearReviews> GetNrOfReviewsPerYear();
    }
}
