const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const reviewController = require("../controller/reviewController");

router.post("/writeReview", auth.protect, reviewController.createReviews);
router.get("/getReviews/:title", auth.protect, reviewController.getReviews);
router.patch(
  "/editReview/:title/:id",
  auth.protect,
  reviewController.updateReviews
);
router.delete(
  "/deleteReview/:title/:id",
  auth.protect,
  reviewController.deleteReviews
);

module.exports = router;
