namespace inside_airbnb.Models
{
    public class Property
    {
        public Property(long listingId)
        {
            ListingId = listingId;
        }

        public long ListingId { get; set; }
    }
}