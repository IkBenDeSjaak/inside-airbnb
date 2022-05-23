using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Linq;

namespace inside_airbnb.Services
{
    public class ListingRepository : IListingRepository
    {
        private readonly DbSet<Listing> _dbSet;

        public ListingRepository(InsideAirbnbContext context)
        {
            _dbSet = context.Set<Listing>();
        }

        public async Task<List<ListingLocation>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
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

            List<ListingLocation> listingLocations = await listings.AsNoTracking().ToListAsync();

            foreach (ListingLocation listing in listingLocations)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                listing.Latitude = ConvertLatitude(listing.Latitude);
                listing.Longitude = ConvertLongitude(listing.Longitude);
            }

            return listingLocations;
        }

        public async Task<List<ListingLocation>> GetListingsFromPage(int? pageNumber)
        {
            int pageSize = 200;

            IQueryable<ListingLocation> listings = _dbSet.
                Select(listing => new ListingLocation
                {
                    Id = listing.Id,
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude
                });

            if (pageNumber != null)
            {
                listings = listings.Skip((int)((pageNumber - 1) * pageSize));
            }

            listings = listings.Take(pageSize);

            List<ListingLocation> listingLocations = await listings.AsNoTracking().ToListAsync();

            foreach (ListingLocation listing in listingLocations)
            {
                // Because points are missing in latitude and longitude coördinates (Amsterdam is at about 52.3 and 4.8)
                listing.Latitude = ConvertLatitude(listing.Latitude);
                listing.Longitude = ConvertLongitude(listing.Longitude);
            }

            return listingLocations;
        }

        public async Task<int> GetAmountOfListings()
        {
            return await _dbSet.AsNoTracking().CountAsync();
        }

        public async Task<ListingInformation?> GetListingByID(long listingId)
        {
            ListingInformation? listing = await _dbSet
                .Select(listing => new ListingInformation
                {
                    Latitude = listing.Latitude,
                    Longitude = listing.Longitude,
                    Bathrooms = listing.Bathrooms,
                    Bedrooms = listing.Bedrooms,
                    Beds = listing.Beds,
                    HostName = listing.HostName,
                    Id = listing.Id,
                    Name = listing.Name,
                    Neighbourhood = listing.NeighbourhoodCleansed,
                    NumberOfReviews = listing.NumberOfReviews,
                    Price = listing.Price,
                    PropertyType = listing.PropertyType,
                    RoomType = listing.RoomType
                })
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == listingId);

            if (listing == null)
            {
                return null;
            }

            listing.Latitude = ConvertLatitude(listing.Latitude);
            listing.Longitude = ConvertLongitude(listing.Longitude);

            return listing;
        }

        public async Task<NeighbourhoodPrices> GetAveragePricePerNeighbourhood()
        {
            var pricePerNeighbourhood = await _dbSet
                .GroupBy(listing => listing.NeighbourhoodCleansed, listing => listing.Price, (key, prices) => new { Neighbourhood = key, AveragePrice = Math.Round(prices.Average(), 2) })
                .OrderBy(neighbourhood => neighbourhood.Neighbourhood)
                .AsNoTracking()
                .ToListAsync();

            NeighbourhoodPrices neighbourhoodPrices = new()
            {
                Neighbourhoods = pricePerNeighbourhood.Select(neighbourhood => neighbourhood.Neighbourhood).ToList(),
                AveragePrices = pricePerNeighbourhood.Select(neighbourhood => neighbourhood.AveragePrice).ToList()
            };

            return neighbourhoodPrices;
        }

        public async Task<NeighbourhoodListings> GetNrOfListingsPerNeighbourhood()
        {
            var listingsPerNeighbourhood = await _dbSet
                .GroupBy(listing => listing.NeighbourhoodCleansed, listing => listing.Id, (key, ids) => new { Neighbourhood = key, NrOfListings = ids.Count() })
                .OrderBy(neighbourhood => neighbourhood.NrOfListings)
                .AsNoTracking()
                .ToListAsync();

            NeighbourhoodListings neighbourhoodListings = new()
            {
                Neighbourhoods = listingsPerNeighbourhood.Select(neighbourhood => neighbourhood.Neighbourhood).ToList(),
                NumberOfListings = listingsPerNeighbourhood.Select(neighbourhood => neighbourhood.NrOfListings).ToList()
            };

            return neighbourhoodListings;
        }

        public async Task<RoomListings> GetNrOfListingsPerRoomType()
        {
            var listingsPerPropertyType = await _dbSet
                .GroupBy(listing => listing.RoomType, listing => listing.Id, (key, ids) => new { RoomType = key, NrOfListings = ids.Count() })
                .OrderBy(neighbourhood => neighbourhood.NrOfListings)
                .AsNoTracking()
                .ToListAsync();

            RoomListings roomListings = new()
            {
                RoomTypes = listingsPerPropertyType.Select(room => room.RoomType).ToList(),
                NumberOfListings = listingsPerPropertyType.Select(room => room.NrOfListings).ToList()
            };

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
