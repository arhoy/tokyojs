const express = require('express');

const router = express.Router();

// import models
const Tour = require('../../models/Tour');

// Name             :   Get Tour By Slug
// Type             :   GET
// Route            :   api/tour/:slug
// Description      :   Get a tour by slug
// Access           :   Anyone can get the tour by slug
router.get('/:slug', async (req, res, next) => {
  try {
    const tour = await Tour.findOne({ slug: req.params.slug })
      .populate('guides', ['name', 'guide', 'email', 'role'])
      .populate('reviews');
    if (!tour)
      next(new AppError(`Could not find Tour: ${req.params.slug}`, 404));

    // return tour
    res.json(tour);
  } catch (error) {
    console.error(error);
    return next(
      new AppError(
        `An unknown error occured: ${error}. Please try again later `,
        500
      )
    );
  }
});

module.exports = router;
