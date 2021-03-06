using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly IListingService _listingService;
        private readonly INeighbourhoodService _neighbourhoodService;
        private readonly IReviewService _reviewService;

        public HomeController(IListingService listingService, INeighbourhoodService neighbourhoodService, IReviewService reviewService)
        {
            _listingService = listingService;
            _neighbourhoodService = neighbourhoodService;
            _reviewService = reviewService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews, long selectedListingId, double? zoom, double? currentLongitude, double? currentLatitude)
        {
            ListingInformation? selectedListing = await _listingService.GetListingByID(selectedListingId);
            List<ListingLocation> listings = await _listingService.GetListings(neighbourhood, minPrice, maxPrice, numberOfReviews);
            List<string> neighbourhoods = await _neighbourhoodService.GetNeighbourhoods();

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

        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Statistics()
        {
            NeighbourhoodPrices neighbourhoodPrices = await _listingService.GetAveragePricePerNeighbourhood();
            NeighbourhoodListings neighbourhoodListings = await _listingService.GetNrOfListingsPerNeighbourhood();
            RoomListings roomListings = await _listingService.GetNrOfListingsPerRoomType();
            YearReviews yearReviews = await _reviewService.GetNrOfReviewsPerYear();

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
    }
}