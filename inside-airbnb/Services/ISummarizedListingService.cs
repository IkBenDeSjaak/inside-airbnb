using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface ISummarizedListingService
    {
        Task<IEnumerable<SummarizedListing>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
    }
}
