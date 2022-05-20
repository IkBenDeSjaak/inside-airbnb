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
        private readonly IListingService _listingsService;

        public ListingsController(IListingService listingsService)
        {
            _listingsService = listingsService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            IEnumerable<ListingLocation> listings = await _listingsService.GetListings(null, null, null, null);
            return View(listings);
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
