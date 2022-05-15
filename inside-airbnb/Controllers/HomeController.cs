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
        private readonly IListingService _listingsService;
        private readonly INeighbourhoodService _neighbourhoodService;

        public HomeController(ILogger<HomeController> logger, IListingService listingsService, INeighbourhoodService neighbourhoodService)
        {
            _logger = logger;
            _listingsService = listingsService;
            _neighbourhoodService = neighbourhoodService;
        }

        [AllowAnonymous]
        public async Task<IActionResult> Index(string neighbourhood, int minPrice, int maxPrice, int numberOfReviews)
        {
            IEnumerable<Listing> listings = await _listingsService.GetListings(neighbourhood, minPrice, maxPrice, numberOfReviews);

            FeatureCollection featureCollection = new FeatureCollection();

            foreach (var listing in listings)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                double latitude = listing.Latitude = Double.Parse(listing.Latitude.ToString().Insert(2, "."), CultureInfo.InvariantCulture);
                double longitude = listing.Longitude = Double.Parse(listing.Longitude.ToString().Insert(1, "."), CultureInfo.InvariantCulture);

                featureCollection.Features.Add(new Feature(new Geometry(new Coordinates(longitude, latitude)), new Property(listing.Id)));
            }

            IEnumerable<string> neighbourhoods = await _neighbourhoodService.GetNeighbourhoods();

            var listingsVM = new ListingsViewModel
            {
                Listings = featureCollection,
                Neighbourhoods = new SelectList(neighbourhoods)
            };

            //return View(listings);
            return View(listingsVM);
        }

        [AllowAnonymous]
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
    }
}