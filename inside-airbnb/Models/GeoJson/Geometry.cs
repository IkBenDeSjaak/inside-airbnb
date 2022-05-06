namespace inside_airbnb.Models
{
    public class Geometry
    {
        public Geometry(Coordinates coordinates)
        {
            Type = "Point";
            Coordinates = new();
            Coordinates.Add(coordinates.longitude);
            Coordinates.Add(coordinates.latitude);
        }

        public string Type { get; set; }
        public List<double> Coordinates { get; set; }
    }
}