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

        public async Task<IEnumerable<Listing>> GetListings()
        {
            return await _dbSet.Take(100).ToListAsync();
        }

        public Task<Listing> GetListingByID(int listingId)
        {
            throw new NotImplementedException();
        }

        public Task InsertListing(Listing listing)
        {
            throw new NotImplementedException();
        }

        public Task DeleteListing(int listingId)
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
