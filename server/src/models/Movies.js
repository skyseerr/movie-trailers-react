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
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    country:[{
        type: String,
        required: true
    }],
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
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

}, {
    timestamps: true
});

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;