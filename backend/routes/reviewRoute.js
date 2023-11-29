const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController')


router.post('/writeReview',reviewController.createReviews);
router.get('/getReviews/:title',reviewController.getReviews)
router.patch('/editReview/:title/:id', reviewController.updateReviews);
router.delete('/deleteReview/:title/:id',reviewController.deleteReviews)


module.exports = router