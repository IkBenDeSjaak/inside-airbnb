#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using System.Globalization;
using inside_airbnb.Services;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class ListingsController : Controller
    {
        private readonly IListingRepository _listingsService;

        public ListingsController(IListingRepository listingsService)
        {
            _listingsService = listingsService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index(int? pageNumber)
        {
            List<ListingLocation> listings = await _listingsService.GetListingsFromPage(pageNumber);
            int listingCount = await _listingsService.GetAmountOfListings();

            if (pageNumber == null)
            {
                pageNumber = 1;
            }

            ListingsViewModel listingsVM = new(listings, (int)pageNumber, listingCount);

            return View(listingsVM);
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Details(long id)
        {
            ListingInformation listing = await _listingsService.GetListingByID(id);

            if (listing == null)
            {
                return NotFound();
            }

            return View(listing);
        }
    }
}
