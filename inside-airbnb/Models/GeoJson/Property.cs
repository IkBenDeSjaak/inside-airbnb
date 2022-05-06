namespace inside_airbnb.Models
{
    public class Property
    {
        public Property(int listingId)
        {
            ListingId = listingId;
        }

        public int ListingId { get; set; }
    }
}