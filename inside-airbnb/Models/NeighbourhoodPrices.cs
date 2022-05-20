namespace inside_airbnb.Models
{
    public class NeighbourhoodPrices
    {
        public NeighbourhoodPrices()
        {
            Neighbourhoods = new List<string>() ;
            AveragePrices = new List<double>();
        }

        public List<string> Neighbourhoods { get; set; }
        public List<double> AveragePrices { get; set; }
    }
}
