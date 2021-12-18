const Movies = require('../models/Movies');

exports.create = (moviesData) => Movies.create(moviesData);

// exports.getTopMovies = () => Movies.find().sort({createdAt: -1}).limit(3).lean();

exports.getLastSix = () => Movies.find().sort({createdAt: -1}).limit(6).lean();

exports.getLastFiveMine = (userId) => Movies.find({'owner': userId}).sort({createdAt: -1}).limit(5).lean();

exports.getAll = () => Movies.find().lean();

exports.getOne = (id) => Movies.findById(id).lean();

exports.delete = (movieId) => Movies.findByIdAndDelete(movieId);

exports.updateOne = (movieId, movieData) => Movies.findByIdAndUpdate(movieId, movieData);

