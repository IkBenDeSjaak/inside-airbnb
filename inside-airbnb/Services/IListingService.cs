using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface IListingService
    {
        Task<ListingInformation?> GetListingByID(long id);
        Task<List<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews);
        Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood();
        Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood();
        Task<RoomListings> GetNrOfListingsPerRoomType();
        Task<List<ListingLocation>> GetListingsFromPage(int pageNumber);
        Task<int> GetAmountOfListings();
    }
}
