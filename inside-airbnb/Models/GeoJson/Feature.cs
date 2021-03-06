namespace inside_airbnb.Models
{
    public class Feature
    {
        public string Type { get; set; }
        public Geometry Geometry { get; set; }
        public Property? Properties { get; set; }

        public Feature(Geometry geometry, Property? properties)
        {
            Type = "Feature";
            Geometry = geometry;
            Properties = properties;
        }
    }
}