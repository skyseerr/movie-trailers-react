const mongoose = require('mongoose');

let moviesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre:[{
        type: String,
        required: true
    }],
    trailerUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        default: 0,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

}, {
    timestamps: true
});

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;