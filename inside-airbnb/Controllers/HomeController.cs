using inside_airbnb.Helpers;
using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Caching.Distributed;
using System.Diagnostics;
using System.Text.Json;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly IDistributedCache _distributedCache;

        private readonly IListingRepository _listingRepository;
        private readonly INeighbourhoodRepository _neighbourhoodRepository;
        private readonly IReviewRepository _reviewRepository;

        private const string CacheKeyListings = "listings";
        private const string CacheKeyNeighbourhoods = "neighbourhoods";
        private const string CacheKeyNeighbourhoodPrices = "neighbourhoodPrices";
        private const string CacheKeyNeighbourhoodListings = "neighbourhoodListings";
        private const string CacheKeyRoomListings = "roomListings";
        private const string CacheKeyYearReviews = "yearReviews";

        public HomeController(IDistributedCache distributedCache, IListingRepository listingRepository, INeighbourhoodRepository neighbourhoodRepository, IReviewRepository reviewRepository)
        {
            _distributedCache = distributedCache;
            _listingRepository = listingRepository;
            _neighbourhoodRepository = neighbourhoodRepository;
            _reviewRepository = reviewRepository;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews, long selectedListingId, double? zoom, double? currentLongitude, double? currentLatitude)
        {
            ListingInformation? selectedListing = await _listingRepository.GetListingByID(selectedListingId);
            List<ListingLocation> listings;
            List<string> neighbourhoods;

            string cachedListingsString = await _distributedCache.GetDataFromCache($"{CacheKeyListings}-{neighbourhood}-{minPrice}-{maxPrice}-{numberOfReviews}");
            string cachedNeighbourhoodsString = await _distributedCache.GetDataFromCache(CacheKeyNeighbourhoods);

            if (!string.IsNullOrEmpty(cachedListingsString))
            {
                listings = JsonSerializer.Deserialize<List<ListingLocation>>(cachedListingsString) ?? new();
            }
            else
            {
                listings = await _listingRepository.GetListings(neighbourhood, minPrice, maxPrice, numberOfReviews);

                await _distributedCache.AddDataToCache($"{CacheKeyListings}-{neighbourhood}-{minPrice}-{maxPrice}-{numberOfReviews}", listings, 100);
            }

            if (!string.IsNullOrEmpty(cachedNeighbourhoodsString))
            {
                neighbourhoods = JsonSerializer.Deserialize<List<string>>(cachedNeighbourhoodsString) ?? new();
            }
            else
            {
                neighbourhoods = await _neighbourhoodRepository.GetNeighbourhoods();

                await _distributedCache.AddDataToCache(CacheKeyNeighbourhoods, neighbourhoods, 100);
            }

            FeatureCollection featureCollection = ConvertListingsToFeatureCollection(listings);

            if (zoom == null)
            {
                zoom = 11;
            }
            if (currentLongitude == null)
            {
                currentLongitude = 4.895168;
            }
            if (currentLatitude == null)
            {
                currentLatitude = 52.370216;
            }

            MapViewModel listingsVM = new()
            {
                Listings = featureCollection,
                Neighbourhoods = new SelectList(neighbourhoods),
                SelectedListing = selectedListing,
                Zoom = zoom,
                Latitude = currentLatitude,
                Longitude = currentLongitude
            };

            return View(listingsVM);
        }

        [AllowAnonymous]
        public async Task<IActionResult> Statistics()
        {
            NeighbourhoodPrices neighbourhoodPrices;
            NeighbourhoodListings neighbourhoodListings;
            RoomListings roomListings;
            YearReviews yearReviews;

            string cachedNeighbourhoodPricesString = await _distributedCache.GetDataFromCache(CacheKeyNeighbourhoodPrices);
            string cachedNeighbourhoodListingsString = await _distributedCache.GetDataFromCache(CacheKeyNeighbourhoodListings);
            string cachedRoomListingsString = await _distributedCache.GetDataFromCache(CacheKeyRoomListings);
            string cachedYearReviewsString = await _distributedCache.GetDataFromCache(CacheKeyYearReviews);

            if (!string.IsNullOrEmpty(cachedNeighbourhoodPricesString))
            {
                neighbourhoodPrices = JsonSerializer.Deserialize<NeighbourhoodPrices>(cachedNeighbourhoodPricesString) ?? new();
            }
            else
            {
                neighbourhoodPrices = await _listingRepository.GetAveragePricePerNeighbourhood();

                await _distributedCache.AddDataToCache(CacheKeyNeighbourhoodPrices, neighbourhoodPrices, 100);
            }

            if (!string.IsNullOrEmpty(cachedNeighbourhoodListingsString))
            {
                neighbourhoodListings = JsonSerializer.Deserialize<NeighbourhoodListings>(cachedNeighbourhoodListingsString) ?? new();
            }
            else
            {
                neighbourhoodListings = await _listingRepository.GetNrOfListingsPerNeighbourhood();

                await _distributedCache.AddDataToCache(CacheKeyNeighbourhoodListings, neighbourhoodListings, 100);
            }

            if (!string.IsNullOrEmpty(cachedRoomListingsString))
            {
                roomListings = JsonSerializer.Deserialize<RoomListings>(cachedRoomListingsString) ?? new();
            }
            else
            {
                roomListings = await _listingRepository.GetNrOfListingsPerRoomType();

                await _distributedCache.AddDataToCache(CacheKeyRoomListings, roomListings, 100);
            }

            if (!string.IsNullOrEmpty(cachedYearReviewsString))
            {
                yearReviews = JsonSerializer.Deserialize<YearReviews>(cachedYearReviewsString) ?? new();
            }
            else
            {
                yearReviews = await _reviewRepository.GetNrOfReviewsPerYear();

                await _distributedCache.AddDataToCache(CacheKeyYearReviews, yearReviews, 100);
            }

            StatisticsViewModel statisticsVM = new()
            {
                NeighbourhoodPrices = neighbourhoodPrices,
                NeighbourhoodListings = neighbourhoodListings,
                RoomListings = roomListings,
                YearReviews = yearReviews
            };

            return View(statisticsVM);
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Privacy()
        {
            return View();
        }

        [AllowAnonymous]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public FeatureCollection ConvertListingsToFeatureCollection(IEnumerable<ListingLocation> listings)
        {
            FeatureCollection featureCollection = new();

            foreach (ListingLocation listing in listings)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                featureCollection.Features.Add(new Feature(new Geometry(new Coordinates(listing.Longitude, listing.Latitude)), new Property(listing.Id)));
            }

            return featureCollection;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> ClearCache(string key)
        {
            await _distributedCache.RemoveAsync(key);
            return Ok(new { Message = $"Cleared cache for key -{key}" });
        }
    }
}