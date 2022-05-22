using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingRepository
    {
        Task<IEnumerable<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
        Task<ListingInformation?> GetListingByID(long listingId);
        Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood();
        Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood();
        Task<RoomListings> GetNrOfListingsPerRoomType();

    }
}
