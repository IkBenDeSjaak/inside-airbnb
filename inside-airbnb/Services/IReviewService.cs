using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IReviewService
    {
        Task<YearReviews> GetNrOfReviewsPerYear();
    }
}
