using System;
using System.Collections.Generic;

namespace inside_airbnb.Models
{
    public partial class Review
    {
        public long ListingId { get; set; }
        public double Id { get; set; }
        public DateTime Date { get; set; }
        public long ReviewerId { get; set; }
        public string ReviewerName { get; set; } = null!;
        public string Comments { get; set; } = null!;
    }
}
