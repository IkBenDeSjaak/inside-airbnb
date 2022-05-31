using inside_airbnb.Cache;
using inside_airbnb.Models;
using System.Text.Json;

namespace inside_airbnb.Services
{
    public class ListingService : IListingService
    {
        private readonly IListingCache _listingCache;
        private readonly IListingRepository _listingRepository;

        public ListingService(IListingCache listingCache, IListingRepository listingRepository)
        {
            _listingCache = listingCache;
            _listingRepository = listingRepository;
        }

        public async Task<ListingInformation?> GetListingByID(long id)
        {
            return await _listingRepository.GetListingByID(id);
        }

        public async Task<List<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
        {
            string cachedListingsString = await _listingCache.GetListingsFromCacheAsync(neighbourhood, minPrice, maxPrice, nrOfReviews);
            List<ListingLocation> listings;

            if (!string.IsNullOrEmpty(cachedListingsString))
            {
                listings = JsonSerializer.Deserialize<List<ListingLocation>>(cachedListingsString) ?? new();
            }
            else
            {
                listings = await _listingRepository.GetListings(neighbourhood, minPrice, maxPrice, nrOfReviews);

                await _listingCache.AddListingsToCacheAsync(neighbourhood, minPrice, maxPrice, nrOfReviews, listings);
            }

            return listings;
        }

        public async Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood()
        {
            NeighbourhoodPrices neighbourhoodPrices;
            string cachedNeighbourhoodPricesString = await _listingCache.GetNeighbourhoodPricesFromCacheAsync();

            if (!string.IsNullOrEmpty(cachedNeighbourhoodPricesString))
            {
                neighbourhoodPrices = JsonSerializer.Deserialize<NeighbourhoodPrices>(cachedNeighbourhoodPricesString) ?? new();
            }
            else
            {
                neighbourhoodPrices = await _listingRepository.GetAveragePricePerNeighbourhood();

                await _listingCache.AddNeighbourhoodPricesToCacheAsync(neighbourhoodPrices);
            }

            return neighbourhoodPrices;
        }

        public async Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood()
        {
            NeighbourhoodListings neighbourhoodListings;
            string cachedNeighbourhoodListingsString = await _listingCache.GetNeighbourhoodListingsFromCacheAsync();

            if (!string.IsNullOrEmpty(cachedNeighbourhoodListingsString))
            {
                neighbourhoodListings = JsonSerializer.Deserialize<NeighbourhoodListings>(cachedNeighbourhoodListingsString) ?? new();
            }
            else
            {
                neighbourhoodListings = await _listingRepository.GetNrOfListingsPerNeighbourhood();

                await _listingCache.AddNeighbourhoodListingsToCacheAsync(neighbourhoodListings);
            }

            return neighbourhoodListings;
        }

        public async Task<RoomListings> GetNrOfListingsPerRoomType()
        {
            RoomListings roomListings;
            string cachedRoomListingsString = await _listingCache.GetRoomListingsFromCacheAsync();

            if (!string.IsNullOrEmpty(cachedRoomListingsString))
            {
                roomListings = JsonSerializer.Deserialize<RoomListings>(cachedRoomListingsString) ?? new();
            }
            else
            {
                roomListings = await _listingRepository.GetNrOfListingsPerRoomType();

                await _listingCache.AddRoomListingsToCacheAsync(roomListings);
            }

            return roomListings;
        }

        public async Task<List<ListingLocation>> GetListingsFromPage(int pageNumber)
        {
            return await _listingRepository.GetListingsFromPage(pageNumber);
        }

        public async Task<int> GetAmountOfListings()
        {
            return await _listingRepository.GetAmountOfListings();
        }
    }
}
