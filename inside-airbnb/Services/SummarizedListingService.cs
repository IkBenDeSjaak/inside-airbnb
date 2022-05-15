using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class SummarizedListingService : ISummarizedListingService
    {
        private readonly InsideAirbnbContext _context;
        private readonly DbSet<SummarizedListing> _dbSet;

        public SummarizedListingService(InsideAirbnbContext context)
        {
            _context = context;
            _dbSet = context.Set<SummarizedListing>();
        }

        public async Task<IEnumerable<SummarizedListing>> GetListings(string? neighbourhood, int? minPrice, int? maxPrice, int? nrOfReviews)
        {
            IQueryable<SummarizedListing> listings = _dbSet.Select(listing => listing);

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

            return await listings.ToListAsync();
        }
    }
}
