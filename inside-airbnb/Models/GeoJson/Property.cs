namespace inside_airbnb.Models
{
    public class Property
    {
        public long ListingId { get; set; }

        public Property(long listingId)
        {
            ListingId = listingId;
        }
    }
}