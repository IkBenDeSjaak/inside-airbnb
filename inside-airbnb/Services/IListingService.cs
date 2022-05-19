using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingService
    {
        Task<IEnumerable<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
        Task<ListingInformation> GetListingByID(long listingId);
    }
}
