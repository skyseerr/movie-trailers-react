const Comments = require('../models/Comments');

exports.getAllMovieComments = (movieId) => Comments.find({'movie': movieId}).sort({createdAt: -1}).limit(5).lean();

exports.create = (comentData) => Comments.create(comentData);
