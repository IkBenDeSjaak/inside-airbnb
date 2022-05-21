namespace inside_airbnb.Models
{
    public class NeighbourhoodListings
    {
        public NeighbourhoodListings()
        {
            Neighbourhoods = new List<string>();
            NumberOfListings = new List<int>();
        }

        public List<string> Neighbourhoods { get; set; }
        public List<int> NumberOfListings { get; set; }
    }
}
