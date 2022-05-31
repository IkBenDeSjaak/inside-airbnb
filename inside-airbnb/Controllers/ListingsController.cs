#nullable disable
using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class ListingsController : Controller
    {
        private readonly IListingService _listingService;

        public ListingsController(IListingService listingService)
        {
            _listingService = listingService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index(int? pageNumber)
        {
            int page;

            if (pageNumber == null || pageNumber < 1)
            {
                page = 1;
            }
            else
            {
                page = (int)pageNumber;
            }

            List<ListingLocation> listings = await _listingService.GetListingsFromPage(page);
            int listingCount = await _listingService.GetAmountOfListings();

            ListingsViewModel listingsVM = new(listings, page, listingCount);

            return View(listingsVM);
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Details(long id)
        {
            ListingInformation listing = await _listingService.GetListingByID(id);

            if (listing == null)
            {
                return NotFound();
            }

            return View(listing);
        }
    }
}
