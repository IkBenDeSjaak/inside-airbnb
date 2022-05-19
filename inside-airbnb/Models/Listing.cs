using System;
using System.Collections.Generic;

namespace inside_airbnb.Models
{
    public partial class Listing
    {
        public long Id { get; set; }
        public string ListingUrl { get; set; } = null!;
        public double ScrapeId { get; set; }
        public DateTime LastScraped { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public string? NeighborhoodOverview { get; set; }
        public string PictureUrl { get; set; } = null!;
        public long HostId { get; set; }
        public string HostUrl { get; set; } = null!;
        public string HostName { get; set; } = null!;
        public DateTime HostSince { get; set; }
        public string? HostLocation { get; set; }
        public string? HostAbout { get; set; }
        public string HostResponseTime { get; set; } = null!;
        public string HostResponseRate { get; set; } = null!;
        public string HostAcceptanceRate { get; set; } = null!;
        public string HostIsSuperhost { get; set; } = null!;
        public string HostThumbnailUrl { get; set; } = null!;
        public string HostPictureUrl { get; set; } = null!;
        public string? HostNeighbourhood { get; set; }
        public int HostListingsCount { get; set; }
        public int HostTotalListingsCount { get; set; }
        public string HostVerifications { get; set; } = null!;
        public string HostHasProfilePic { get; set; } = null!;
        public string HostIdentityVerified { get; set; } = null!;
        public string? Neighbourhood { get; set; }
        public string NeighbourhoodCleansed { get; set; } = null!;
        public string? NeighbourhoodGroupCleansed { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string PropertyType { get; set; } = null!;
        public string RoomType { get; set; } = null!;
        public int Accommodates { get; set; }
        public double? Bathrooms { get; set; }
        public string? BathroomsText { get; set; }
        public int? Bedrooms { get; set; }
        public int? Beds { get; set; }
        public string Amenities { get; set; } = null!;
        public int Price { get; set; }
        public int? MinimumNights { get; set; }
        public int? MaximumNights { get; set; }
        public int? MinimumMinimumNights { get; set; }
        public int? MaximumMinimumNights { get; set; }
        public int? MinimumMaximumNights { get; set; }
        public int? MaximumMaximumNights { get; set; }
        public double? MinimumNightsAvgNtm { get; set; }
        public double? MaximumNightsAvgNtm { get; set; }
        public string? CalendarUpdated { get; set; }
        public string HasAvailability { get; set; } = null!;
        public int Availability30 { get; set; }
        public int Availability60 { get; set; }
        public int Availability90 { get; set; }
        public int Availability365 { get; set; }
        public DateTime CalendarLastScraped { get; set; }
        public int NumberOfReviews { get; set; }
        public int NumberOfReviewsLtm { get; set; }
        public int NumberOfReviewsL30d { get; set; }
        public DateTime? FirstReview { get; set; }
        public DateTime? LastReview { get; set; }
        public double? ReviewScoresRating { get; set; }
        public double? ReviewScoresAccuracy { get; set; }
        public double? ReviewScoresCleanliness { get; set; }
        public double? ReviewScoresCheckin { get; set; }
        public double? ReviewScoresCommunication { get; set; }
        public double? ReviewScoresLocation { get; set; }
        public double? ReviewScoresValue { get; set; }
        public string? License { get; set; }
        public string InstantBookable { get; set; } = null!;
        public int CalculatedHostListingsCount { get; set; }
        public int CalculatedHostListingsCountEntireHomes { get; set; }
        public int CalculatedHostListingsCountPrivateRooms { get; set; }
        public int CalculatedHostListingsCountSharedRooms { get; set; }
        public double? ReviewsPerMonth { get; set; }
    }
}
