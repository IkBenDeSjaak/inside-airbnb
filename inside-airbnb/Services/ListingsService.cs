using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class ListingsService : IListingsService
    {
        private readonly InsideAirbnbContext _context;
        private readonly DbSet<Listing> _repo;

        public ListingsService(InsideAirbnbContext context)
        {
            _context = context;
            _repo = context.Set<Listing>();
        }

        public async Task<IEnumerable<Listing>> GetListings()
        {
            return await _repo.Take(100).ToListAsync();
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
