using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace inside_airbnb.Services
{
    public class ListingService : IListingService
    {
        private readonly InsideAirbnbContext _context;
        private readonly DbSet<Listing> _dbSet;

        public ListingService(InsideAirbnbContext context)
        {
            _context = context;
            _dbSet = context.Set<Listing>();
        }

        public async Task<IEnumerable<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
        {
            IQueryable<ListingLocation> listings = _context.Listings.Select(listing => new ListingLocation { Id = listing.Id, Latitude = listing.Latitude, Longitude = listing.Longitude, Price = listing.Price, NumberOfReviews = listing.NumberOfReviews, Neighbourhood = listing.NeighbourhoodCleansed });

            if (!string.IsNullOrEmpty(neighbourhood))
            {
                listings = listings.Where(listing => listing.Neighbourhood!.Contains(neighbourhood));
            }

            if (minPrice != null)
            {
                listings = listings.Where(listing => listing.Price! > minPrice);
            }

            if (maxPrice != null)
            {
                listings = listings.Where(listing => listing.Price! < maxPrice);
            }

            if (nrOfReviews != null)
            {
                listings = listings.Where(listing => listing.NumberOfReviews! > nrOfReviews);
            }

            listings = listings.Select(listing => new ListingLocation { Id = listing.Id, Latitude = listing.Latitude, Longitude = listing.Longitude });
            
            IEnumerable<ListingLocation> listingLocations = await listings.ToListAsync();

            foreach (ListingLocation listing in listingLocations)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                listing.Latitude = ConvertLatitude(listing.Latitude);
                listing.Longitude = ConvertLongitude(listing.Longitude);
            }

            return listingLocations;
        }

        public async Task<ListingInformation> GetListingByID(long listingId)
        {
            Listing? listing = await _dbSet.FindAsync(listingId);

            if(listing != null)
            {
                return new ListingInformation() { Latitude = ConvertLatitude(listing.Latitude), Longitude = ConvertLongitude(listing.Longitude), Bathrooms = listing?.Bathrooms, Bedrooms = listing?.Bedrooms, Beds = listing?.Beds, HostName = listing.HostName, Id = listing.Id, Name = listing.Name, Neighbourhood = listing.NeighbourhoodCleansed, NumberOfReviews = listing.NumberOfReviews, Price = listing.Price, PropertyType = listing.PropertyType, RoomType = listing.RoomType };

            } else
            {
                return new ListingInformation();
            }
        }

        public double ConvertLatitude(double latitude)
        {
            return Double.Parse(latitude.ToString().Insert(2, "."), CultureInfo.InvariantCulture);
        }

        public double ConvertLongitude(double longitude)
        {
            return Double.Parse(longitude.ToString().Insert(1, "."), CultureInfo.InvariantCulture);
        }
    }
}
