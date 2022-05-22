using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace inside_airbnb.Services
{
    public class ListingService : IListingService
    {
        private readonly DbSet<Listing> _dbSet;

        public ListingService(InsideAirbnbContext context)
        {
            _dbSet = context.Set<Listing>();
        }

        public async Task<IEnumerable<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
        {
            IQueryable<ListingLocation> listings = _dbSet
                .Select(listing => new ListingLocation
                {
                    Id = listing.Id,
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude,
                    Price = listing.Price,
                    NumberOfReviews = listing.NumberOfReviews,
                    Neighbourhood = listing.NeighbourhoodCleansed
                });

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

            listings = listings.
                Select(listing => new ListingLocation
                {
                    Id = listing.Id,
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude
                });

            IEnumerable<ListingLocation> listingLocations = await listings.ToListAsync();

            foreach (ListingLocation listing in listingLocations)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                listing.Latitude = ConvertLatitude(listing.Latitude);
                listing.Longitude = ConvertLongitude(listing.Longitude);
            }

            return listingLocations;
        }

        public async Task<ListingInformation?> GetListingByID(long listingId)
        {
            Listing? listing = await _dbSet.FindAsync(listingId);

            if (listing != null)
            {
                return new ListingInformation()
                {
                    Latitude = ConvertLatitude(listing.Latitude),
                    Longitude = ConvertLongitude(listing.Longitude),
                    Bathrooms = listing?.Bathrooms,
                    Bedrooms = listing?.Bedrooms,
                    Beds = listing?.Beds,
                    HostName = listing.HostName,
                    Id = listing.Id,
                    Name = listing.Name,
                    Neighbourhood = listing.NeighbourhoodCleansed,
                    NumberOfReviews = listing.NumberOfReviews,
                    Price = listing.Price,
                    PropertyType = listing.PropertyType,
                    RoomType = listing.RoomType
                };
            }
            else
            {
                return null;
            }
        }

        public async Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood()
        {
            NeighbourhoodPrices neighbourhoodPrices = new();

            var pricePerNeighbourhood = await _dbSet.
                GroupBy(listing => listing.NeighbourhoodCleansed, listing => listing.Price, (key, prices) => new { Neighbourhood = key, AveragePrice = Math.Round(prices.Average(), 2) }).
                OrderBy(neighbourhood => neighbourhood.Neighbourhood).
                ToListAsync();

            foreach (var neighbourhood in pricePerNeighbourhood)
            {
                neighbourhoodPrices.Neighbourhoods.Add(neighbourhood.Neighbourhood);
                neighbourhoodPrices.AveragePrices.Add(neighbourhood.AveragePrice);
            }

            return neighbourhoodPrices;
        }

        public async Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood()
        {
            NeighbourhoodListings neighbourhoodListings = new();

            var listingsPerNeighbourhood = await _dbSet.
                GroupBy(listing => listing.NeighbourhoodCleansed, listing => listing.Id, (key, ids) => new { Neighbourhood = key, NrOfListings = ids.Count() }).
                OrderBy(neighbourhood => neighbourhood.NrOfListings).
                ToListAsync();

            foreach (var neighbourhood in listingsPerNeighbourhood)
            {
                neighbourhoodListings.Neighbourhoods.Add(neighbourhood.Neighbourhood);
                neighbourhoodListings.NumberOfListings.Add(neighbourhood.NrOfListings);
            }

            return neighbourhoodListings;
        }

        public async Task<RoomListings> GetNrOfListingsPerRoomType()
        {
            RoomListings roomListings = new();

            var listingsPerPropertyType = await _dbSet.
                GroupBy(listing => listing.RoomType, listing => listing.Id, (key, ids) => new { RoomType = key, NrOfListings = ids.Count() }).
                OrderBy(neighbourhood => neighbourhood.NrOfListings).
                ToListAsync();

            foreach (var property in listingsPerPropertyType)
            {
                roomListings.RoomTypes.Add(property.RoomType);
                roomListings.NumberOfListings.Add(property.NrOfListings);
            }

            return roomListings;
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
