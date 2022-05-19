namespace inside_airbnb.Models
{
    public class ListingInformation
    {
        public long Id { get; set; }
        public string Name { get; set; } = null!;
        public string HostName { get; set; } = null!;
        public string? Neighbourhood { get; set; }
        public string PropertyType { get; set; } = null!;
        public string RoomType { get; set; } = null!;
        public double? Bathrooms { get; set; }
        public int? Bedrooms { get; set; }
        public int? Beds { get; set; }
        public int Price { get; set; }
        public int NumberOfReviews { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
