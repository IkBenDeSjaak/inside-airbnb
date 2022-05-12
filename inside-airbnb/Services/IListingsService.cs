using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingsService
    {
        Task<IEnumerable<Listing>> GetListings();
        Task<Listing> GetListingByID(int listingId);
        Task InsertListing(Listing listing);
        Task DeleteListing(int listingId);
        Task UpdateListing(Listing listing);
        Task Save();
    }
}
