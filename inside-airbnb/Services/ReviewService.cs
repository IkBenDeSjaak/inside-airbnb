﻿using inside_airbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace inside_airbnb.Services
{
    public class ReviewService : IReviewService
    {
        private readonly DbSet<Review> _dbSet;

        public ReviewService(InsideAirbnbContext context)
        {
            _dbSet = context.Set<Review>();
        }

        public YearReviews GetNrOfReviewsPerYear()
        {
            YearReviews yearReviews = new();
            var reviewsPerYear = _dbSet.
                GroupBy(review => review.Date.Year, listing => listing.Id, (key, ids) => new { Year = key, NrOfReviews = ids.Count() }).
                OrderBy(date => date.Year);

            foreach (var year in reviewsPerYear)
            {
                yearReviews.Years.Add(year.Year);
                yearReviews.NumberOfReviews.Add(year.NrOfReviews);
            }

            return yearReviews;
        }
    }
}