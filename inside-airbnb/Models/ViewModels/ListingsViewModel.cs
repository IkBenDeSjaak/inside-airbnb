using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

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
        public double? Zoom { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public ListingInformation? SelectedListing { get; set; }
    }
}
