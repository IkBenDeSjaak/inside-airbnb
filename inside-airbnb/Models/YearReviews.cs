namespace inside_airbnb.Models
{
    public class YearReviews
    {
        public YearReviews()
        {
            Years = new List<int>();
            NumberOfReviews = new List<int>();
        }

        public List<int> Years { get; set; }
        public List<int> NumberOfReviews { get; set; }
    }
}
