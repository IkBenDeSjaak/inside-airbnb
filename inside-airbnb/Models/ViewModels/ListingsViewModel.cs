namespace inside_airbnb.Models.ViewModels
{
    public class ListingsViewModel
    {
        private const int PageSize = 200;
        public ListingsViewModel(IEnumerable<ListingLocation> listings, int pageNumber, int amountOfListings)
        {
            Listings = (List<ListingLocation>)listings;
            PageNumber = pageNumber;
            HasPreviousPage = pageNumber > 1;
            HasNextPage = pageNumber < (int)Math.Ceiling(amountOfListings / (double)PageSize);
        }

        public List<ListingLocation> Listings { get; set; }
        public bool HasPreviousPage { get; set; }
        public bool HasNextPage { get; set; }
        public int PageNumber { get; set; }
    }
}
