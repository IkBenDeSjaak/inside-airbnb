namespace inside_airbnb.Models.ViewModels
{
    public class StatisticsViewModel
    {
        public StatisticsViewModel()
        {
            NeighbourhoodPrices = new();
            NeighbourhoodListings = new();
            RoomListings = new();
            YearReviews = new();
        }

        public NeighbourhoodPrices NeighbourhoodPrices { get; set; }
        public NeighbourhoodListings NeighbourhoodListings { get; set; }
        public RoomListings RoomListings { get; set; }
        public YearReviews YearReviews { get; set; }
    }
}
