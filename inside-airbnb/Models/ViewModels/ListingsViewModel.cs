using Microsoft.AspNetCore.Mvc.Rendering;

namespace inside_airbnb.Models.ViewModels
{
    public class ListingsViewModel
    {
        public FeatureCollection? Listings { get; set; }
        public SelectList? Neighbourhoods { get; set; }
        public string? Neighbourhood { get; set; }
        public int? MinPrice { get; set; }
        public int? MaxPrice { get; set; }
        public int? NumberOfReviews { get; set; }
    }
}
