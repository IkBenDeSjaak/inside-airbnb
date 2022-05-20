using inside_airbnb.Models;
using inside_airbnb.Models.ViewModels;
using inside_airbnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace inside_airbnb.Controllers
{
    [Authorize]
    public class StatisticsController : Controller
    {
        private readonly IListingService _listingsService;

        public StatisticsController(IListingService listingsService)
        {
            _listingsService = listingsService;
        }

        [AllowAnonymous]
        public async Task<IActionResult> Index()
        {
            NeighbourhoodPrices neighbourhoodPrices = _listingsService.GetAveragePricePerNeighbourhood();

            StatisticsViewModel statisticsVM = new StatisticsViewModel
            {
                NeighbourhoodPrices = neighbourhoodPrices,
            };

            return View(statisticsVM);
        }
    }
}
