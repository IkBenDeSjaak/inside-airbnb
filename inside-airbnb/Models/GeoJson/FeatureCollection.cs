namespace inside_airbnb.Models
{
    public class FeatureCollection
    {
        public string Type { get; set; }
        public List<Feature> Features { get; set; }

        public FeatureCollection()
        {
            Type = "FeatureCollection";
            Features = new();
        }
    }
}