using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<IEnumerable<Listing>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
        {
            IQueryable<Listing> listings = _dbSet.Select(listing => listing);

            if (!string.IsNullOrEmpty(neighbourhood))
            {
                listings = listings.Where(listing => listing.NeighbourhoodCleansed!.Contains(neighbourhood));
            }

            if (minPrice != null)
            {
                //listings = listings.Where(listing => int.Parse(listing.Price!.Remove(0, 1)) > minPrice);
            }

            if (maxPrice != null)
            {
                //listings = listings.Where(listing => int.Parse(listing.Price!.Remove(0, 1)) < maxPrice);
            }

            if (nrOfReviews != null)
            {
                listings = listings.Where(listing => listing.NumberOfReviews! > nrOfReviews);
            }

            return await listings.ToListAsync();
        }

        public Task<Listing> GetListingByID(long listingId)
        {
            throw new NotImplementedException();
        }

        public Task InsertListing(Listing listing)
        {
            throw new NotImplementedException();
        }

        public Task DeleteListing(long listingId)
        {
            throw new NotImplementedException();
        }

        public Task UpdateListing(Listing listing)
        {
            throw new NotImplementedException();
        }

        public Task Save()
        {
            throw new NotImplementedException();
        }
    }
}
