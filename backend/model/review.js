const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
