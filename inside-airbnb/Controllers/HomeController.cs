using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using inside_airbnb.Services;
using System.Globalization;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IListingService _listingService;
        private readonly INeighbourhoodService _neighbourhoodService;

        public HomeController(ILogger<HomeController> logger, IListingService listingService, INeighbourhoodService neighbourhoodService)
        {
            _logger = logger;
            _listingService = listingService;
            _neighbourhoodService = neighbourhoodService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index(string? neighbourhood, int? minPrice, int? maxPrice, int? numberOfReviews, long selectedListingId, double? zoom, double? currentLongitude, double? currentLatitude)
        { 
            IEnumerable<ListingLocation> listings = await _listingService.GetListings(neighbourhood, minPrice, maxPrice, numberOfReviews);
            ListingInformation selectedListing = await _listingService.GetListingByID(selectedListingId);
            IEnumerable<string> neighbourhoods = await _neighbourhoodService.GetNeighbourhoods();
            FeatureCollection featureCollection = ConvertListingsToFeatureCollection(listings);

            if (zoom == null) 
            {
                zoom = 11;
            }
            if (currentLongitude == null)
            {
                currentLongitude = 4.902318081500600;
            }
            if(currentLatitude == null)
            {
                currentLatitude = 52.37851665631290;
            }

            var listingsVM = new ListingsViewModel
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
            FeatureCollection featureCollection = new FeatureCollection();

            foreach (ListingLocation listing in listings)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                featureCollection.Features.Add(new Feature(new Geometry(new Coordinates(listing.Longitude, listing.Latitude)), new Property(listing.Id)));
            }

            return featureCollection;
        }
    }
}