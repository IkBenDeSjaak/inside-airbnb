using inside_airbnb.Models;

namespace inside_airbnb.Services
{
    public interface INeighbourhoodService
    {
        Task<IEnumerable<string>> GetNeighbourhoods();
    }
}
