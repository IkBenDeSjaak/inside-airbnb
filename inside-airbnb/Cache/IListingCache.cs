using inside_airbnb.Models;

namespace inside_airbnb.Cache
{
    public interface IListingCache
    {
        Task<string> GetListingsFromCacheAsync(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews);
        Task AddListingsToCacheAsync(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews, List<ListingLocation> listings);
        Task<string> GetNeighbourhoodPricesFromCacheAsync();
        Task AddNeighbourhoodPricesToCacheAsync(NeighbourhoodPrices neighbourhoodPrices);
        Task<string> GetNeighbourhoodListingsFromCacheAsync();
        Task AddNeighbourhoodListingsToCacheAsync(NeighbourhoodListings neighbourhoodListings);
        Task<string> GetRoomListingsFromCacheAsync();
        Task AddRoomListingsToCacheAsync(RoomListings roomListings);
    }
}
