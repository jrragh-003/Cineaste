const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const paymentController = require("../controller/paymentController");

router.post("/razorpay", auth.protect, paymentController.makePayment);

module.exports = router;
