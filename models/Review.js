const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    dislikes: {
        type: Number,
        required: true,
        default: 0
    },
    text: {
        type: String,
        required: true
    },
})

const Review = mongoose.model('review', ReviewSchema);
module.exports = Review;