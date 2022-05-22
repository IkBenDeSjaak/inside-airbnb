using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface INeighbourhoodRepository
    {
        Task<IEnumerable<string>> GetNeighbourhoods();
    }
}
