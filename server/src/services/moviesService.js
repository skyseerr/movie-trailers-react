const Movies = require('../models/Movies');

exports.create = (moviesData) => Movies.create(moviesData);

// exports.getTopMovies = () => Movies.find().sort({createdAt: -1}).limit(3).lean();

exports.getLastSix = () => Movies.find().sort({year: -1}).limit(6).lean();

exports.getLastFiveMine = (userId) => Movies.find({'owner': userId}).sort({createdAt: -1}).limit(5).lean();

exports.getAllMine = (userId) => Movies.find({'owner': userId}).lean();

exports.getAll = () => Movies.find().sort({createdAt: -1}).lean();

exports.getOne = (id) => Movies.findById(id).lean();

exports.delete = (movieId) => Movies.findByIdAndDelete(movieId);

exports.updateOne = (movieId, movieData) => Movies.findByIdAndUpdate(movieId, movieData);

exports.search = (param) => Movies.find({title: { $regex: param, $options: 'i' } }).limit(18).lean();

exports.getByCategory = (param) => Movies.find({genre: { $regex: param, $options: 'i' } }).limit(18).lean();

exports.getByCategorySix = (param, movieId) => Movies.find({ _id: {$ne: movieId}, genre: { $regex: param, $options: 'i' }}).limit(6).lean();




