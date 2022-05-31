using inside_airbnb.Cache;
using System.Text.Json;

namespace inside_airbnb.Services
{
    public class NeighbourhoodService : INeighbourhoodService
    {
        private readonly INeighbourhoodCache _neighbourhoodCache;
        private readonly INeighbourhoodRepository _neighbourhoodRepository;

        public NeighbourhoodService(INeighbourhoodCache neighbourhoodCache, INeighbourhoodRepository neighbourhoodRepository)
        {
            _neighbourhoodCache = neighbourhoodCache;
            _neighbourhoodRepository = neighbourhoodRepository;
        }

        public async Task<List<string>> GetNeighbourhoods()
        {
            List<string> neighbourhoods;
            string cachedNeighbourhoodsString = await _neighbourhoodCache.GetNeighbourhoodsFromCacheAsync();

            if (!string.IsNullOrEmpty(cachedNeighbourhoodsString))
            {
                neighbourhoods = JsonSerializer.Deserialize<List<string>>(cachedNeighbourhoodsString) ?? new();
            }
            else
            {
                neighbourhoods = await _neighbourhoodRepository.GetNeighbourhoods();

                await _neighbourhoodCache.AddNeighbourhoodsToCacheAsync(neighbourhoods);
            }

            return neighbourhoods;
        }
    }
}
