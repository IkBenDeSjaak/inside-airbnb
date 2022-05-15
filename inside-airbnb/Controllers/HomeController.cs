using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using inside_airbnb.Services;
using System.Globalization;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IListingService _listingsService;

        public HomeController(ILogger<HomeController> logger, IListingService listingsService)
        {
            _logger = logger;
            _listingsService = listingsService;
        }

        [AllowAnonymous]
        public async Task<IActionResult> Index()
        {
            IEnumerable<Listing> listings = await _listingsService.GetListings();

            FeatureCollection featureCollection = new FeatureCollection();

            foreach (var listing in listings)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                double latitude = listing.Latitude = Double.Parse(listing.Latitude.ToString().Insert(2, "."), CultureInfo.InvariantCulture);
                double longitude = listing.Longitude = Double.Parse(listing.Longitude.ToString().Insert(1, "."), CultureInfo.InvariantCulture);

                featureCollection.Features.Add(new Feature(new Geometry(new Coordinates(longitude, latitude)), new Property(listing.Id)));
            }

            var listingsVM = new ListingsViewModel
            {
                Listings = featureCollection
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