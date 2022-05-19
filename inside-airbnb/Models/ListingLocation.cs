namespace inside_airbnb.Models
{
    public class ListingLocation
    {
        public long Id { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string? Neighbourhood { get; set; }
        public int Price { get; set; }
        public int NumberOfReviews { get; set; }
    }
}
