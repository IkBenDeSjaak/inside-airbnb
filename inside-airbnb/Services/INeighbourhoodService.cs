namespace inside_airbnb.Services
{
    public interface INeighbourhoodService
    {
        Task<List<string>> GetNeighbourhoods();
    }
}
