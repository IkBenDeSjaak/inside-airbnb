using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingService
    {
        Task<IEnumerable<Listing>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
        Task<Listing> GetListingByID(long listingId);
        Task InsertListing(Listing listing);
        Task DeleteListing(long listingId);
        Task UpdateListing(Listing listing);
        Task Save();
    }
}
