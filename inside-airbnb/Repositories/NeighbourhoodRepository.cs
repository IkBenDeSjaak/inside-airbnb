using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class NeighbourhoodRepository : INeighbourhoodRepository
    {
        private readonly DbSet<Neighbourhood> _dbSet;

        public NeighbourhoodRepository(InsideAirbnbContext context)
        {
            _dbSet = context.Set<Neighbourhood>();
        }

        public async Task<List<string>> GetNeighbourhoods()
        {
            IQueryable<string> neighbourhoods = _dbSet.Select(neighbourhood => neighbourhood.Neighbourhood1);

            return await neighbourhoods.ToListAsync();
        }
    }
}
