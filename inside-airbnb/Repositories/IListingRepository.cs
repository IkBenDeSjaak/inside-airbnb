using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingRepository
    {
        Task<List<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
        Task<List<ListingLocation>> GetListingsFromPage(int? pageNumber);
        Task<int> GetAmountOfListings();
        Task<ListingInformation?> GetListingByID(long listingId);
        Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood();
        Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood();
        Task<RoomListings> GetNrOfListingsPerRoomType();

    }
}
