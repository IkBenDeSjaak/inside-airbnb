using System;
using System.Collections.Generic;

namespace inside_airbnb.Models
{
    public partial class Calendar
    {
        public long ListingId { get; set; }
        public DateTime Date { get; set; }
        public string Available { get; set; } = null!;
        public string Price { get; set; } = null!;
        public string AdjustedPrice { get; set; } = null!;
        public int? MinimumNights { get; set; }
        public int? MaximumNights { get; set; }
    }
}
