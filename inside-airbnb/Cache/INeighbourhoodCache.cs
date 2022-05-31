namespace inside_airbnb.Cache
{
    public interface INeighbourhoodCache
    {
        Task<string> GetNeighbourhoodsFromCacheAsync();
        Task AddNeighbourhoodsToCacheAsync(List<string> neighbourhoods);
    }
}
