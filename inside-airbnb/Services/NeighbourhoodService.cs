using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class NeighbourhoodService : INeighbourhoodService
    {
        private readonly InsideAirbnbContext _context;
        private readonly DbSet<Neighbourhood> _dbSet;

        public NeighbourhoodService(InsideAirbnbContext context)
        {
            _context = context;
            _dbSet = context.Set<Neighbourhood>();
        }

        public async Task<IEnumerable<string>> GetNeighbourhoods()
        {
            IQueryable<string> neighbourhoods = _dbSet.Select(neighbourhood => neighbourhood.Neighbourhood1);

            return await neighbourhoods.ToListAsync();
        }
    }
}
