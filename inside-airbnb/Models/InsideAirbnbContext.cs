using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace inside_airbnb.Models
{
    public partial class InsideAirbnbContext : DbContext
    {
        public InsideAirbnbContext()
        {
        }

        public InsideAirbnbContext(DbContextOptions<InsideAirbnbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Calendar> Calendars { get; set; } = null!;
        public virtual DbSet<Listing> Listings { get; set; } = null!;
        public virtual DbSet<Neighbourhood> Neighbourhoods { get; set; } = null!;
        public virtual DbSet<Review> Reviews { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Calendar>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("calendar");

                entity.Property(e => e.AdjustedPrice)
                    .HasMaxLength(50)
                    .HasColumnName("adjusted_price");

                entity.Property(e => e.Available)
                    .HasMaxLength(50)
                    .HasColumnName("available");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.ListingId).HasColumnName("listing_id");

                entity.Property(e => e.MaximumNights).HasColumnName("maximum_nights");

                entity.Property(e => e.MinimumNights).HasColumnName("minimum_nights");

                entity.Property(e => e.Price)
                    .HasMaxLength(50)
                    .HasColumnName("price");
            });

            modelBuilder.Entity<Listing>(entity =>
            {
                entity.ToTable("listings");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.Accommodates).HasColumnName("accommodates");

                entity.Property(e => e.Amenities).HasColumnName("amenities");

                entity.Property(e => e.Availability30).HasColumnName("availability_30");

                entity.Property(e => e.Availability365).HasColumnName("availability_365");

                entity.Property(e => e.Availability60).HasColumnName("availability_60");

                entity.Property(e => e.Availability90).HasColumnName("availability_90");

                entity.Property(e => e.Bathrooms).HasColumnName("bathrooms");

                entity.Property(e => e.BathroomsText).HasColumnName("bathrooms_text");

                entity.Property(e => e.Bedrooms).HasColumnName("bedrooms");

                entity.Property(e => e.Beds).HasColumnName("beds");

                entity.Property(e => e.CalculatedHostListingsCount).HasColumnName("calculated_host_listings_count");

                entity.Property(e => e.CalculatedHostListingsCountEntireHomes).HasColumnName("calculated_host_listings_count_entire_homes");

                entity.Property(e => e.CalculatedHostListingsCountPrivateRooms).HasColumnName("calculated_host_listings_count_private_rooms");

                entity.Property(e => e.CalculatedHostListingsCountSharedRooms).HasColumnName("calculated_host_listings_count_shared_rooms");

                entity.Property(e => e.CalendarLastScraped).HasColumnName("calendar_last_scraped");

                entity.Property(e => e.CalendarUpdated).HasColumnName("calendar_updated");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.FirstReview).HasColumnName("first_review");

                entity.Property(e => e.HasAvailability).HasColumnName("has_availability");

                entity.Property(e => e.HostAbout).HasColumnName("host_about");

                entity.Property(e => e.HostAcceptanceRate).HasColumnName("host_acceptance_rate");

                entity.Property(e => e.HostHasProfilePic).HasColumnName("host_has_profile_pic");

                entity.Property(e => e.HostId).HasColumnName("host_id");

                entity.Property(e => e.HostIdentityVerified).HasColumnName("host_identity_verified");

                entity.Property(e => e.HostIsSuperhost).HasColumnName("host_is_superhost");

                entity.Property(e => e.HostListingsCount).HasColumnName("host_listings_count");

                entity.Property(e => e.HostLocation).HasColumnName("host_location");

                entity.Property(e => e.HostName).HasColumnName("host_name");

                entity.Property(e => e.HostNeighbourhood).HasColumnName("host_neighbourhood");

                entity.Property(e => e.HostPictureUrl).HasColumnName("host_picture_url");

                entity.Property(e => e.HostResponseRate).HasColumnName("host_response_rate");

                entity.Property(e => e.HostResponseTime).HasColumnName("host_response_time");

                entity.Property(e => e.HostSince).HasColumnName("host_since");

                entity.Property(e => e.HostThumbnailUrl).HasColumnName("host_thumbnail_url");

                entity.Property(e => e.HostTotalListingsCount).HasColumnName("host_total_listings_count");

                entity.Property(e => e.HostUrl).HasColumnName("host_url");

                entity.Property(e => e.HostVerifications).HasColumnName("host_verifications");

                entity.Property(e => e.InstantBookable).HasColumnName("instant_bookable");

                entity.Property(e => e.LastReview).HasColumnName("last_review");

                entity.Property(e => e.LastScraped).HasColumnName("last_scraped");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.License).HasColumnName("license");

                entity.Property(e => e.ListingUrl).HasColumnName("listing_url");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.MaximumMaximumNights).HasColumnName("maximum_maximum_nights");

                entity.Property(e => e.MaximumMinimumNights).HasColumnName("maximum_minimum_nights");

                entity.Property(e => e.MaximumNights).HasColumnName("maximum_nights");

                entity.Property(e => e.MaximumNightsAvgNtm).HasColumnName("maximum_nights_avg_ntm");

                entity.Property(e => e.MinimumMaximumNights).HasColumnName("minimum_maximum_nights");

                entity.Property(e => e.MinimumMinimumNights).HasColumnName("minimum_minimum_nights");

                entity.Property(e => e.MinimumNights).HasColumnName("minimum_nights");

                entity.Property(e => e.MinimumNightsAvgNtm).HasColumnName("minimum_nights_avg_ntm");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.NeighborhoodOverview).HasColumnName("neighborhood_overview");

                entity.Property(e => e.Neighbourhood).HasColumnName("neighbourhood");

                entity.Property(e => e.NeighbourhoodCleansed).HasColumnName("neighbourhood_cleansed");

                entity.Property(e => e.NeighbourhoodGroupCleansed).HasColumnName("neighbourhood_group_cleansed");

                entity.Property(e => e.NumberOfReviews).HasColumnName("number_of_reviews");

                entity.Property(e => e.NumberOfReviewsL30d).HasColumnName("number_of_reviews_l30d");

                entity.Property(e => e.NumberOfReviewsLtm).HasColumnName("number_of_reviews_ltm");

                entity.Property(e => e.PictureUrl).HasColumnName("picture_url");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.PropertyType).HasColumnName("property_type");

                entity.Property(e => e.ReviewScoresAccuracy).HasColumnName("review_scores_accuracy");

                entity.Property(e => e.ReviewScoresCheckin).HasColumnName("review_scores_checkin");

                entity.Property(e => e.ReviewScoresCleanliness).HasColumnName("review_scores_cleanliness");

                entity.Property(e => e.ReviewScoresCommunication).HasColumnName("review_scores_communication");

                entity.Property(e => e.ReviewScoresLocation).HasColumnName("review_scores_location");

                entity.Property(e => e.ReviewScoresRating).HasColumnName("review_scores_rating");

                entity.Property(e => e.ReviewScoresValue).HasColumnName("review_scores_value");

                entity.Property(e => e.ReviewsPerMonth).HasColumnName("reviews_per_month");

                entity.Property(e => e.RoomType).HasColumnName("room_type");

                entity.Property(e => e.ScrapeId).HasColumnName("scrape_id");
            });

            modelBuilder.Entity<Neighbourhood>(entity =>
            {
                entity.HasKey(e => e.Neighbourhood1);

                entity.ToTable("neighbourhoods");

                entity.Property(e => e.Neighbourhood1)
                    .HasMaxLength(50)
                    .HasColumnName("neighbourhood");

                entity.Property(e => e.NeighbourhoodGroup)
                    .HasMaxLength(1)
                    .HasColumnName("neighbourhood_group");
            });

            modelBuilder.Entity<Review>(entity =>
            {
                entity.ToTable("reviews");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Comments).HasColumnName("comments");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.ListingId).HasColumnName("listing_id");

                entity.Property(e => e.ReviewerId).HasColumnName("reviewer_id");

                entity.Property(e => e.ReviewerName)
                    .HasMaxLength(200)
                    .HasColumnName("reviewer_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
