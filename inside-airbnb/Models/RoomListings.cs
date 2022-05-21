namespace inside_airbnb.Models
{
    public class RoomListings
    {
        public RoomListings()
        {
            RoomTypes = new List<string>();
            NumberOfListings = new List<int>();
        }

        public List<string> RoomTypes { get; set; }
        public List<int> NumberOfListings { get; set; }
    }
}
