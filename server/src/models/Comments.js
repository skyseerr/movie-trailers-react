const mongoose = require('mongoose');

let commentsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movie',
    },
    userName: {
        type: String,
    },

}, {
    timestamps: true
});

let Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;