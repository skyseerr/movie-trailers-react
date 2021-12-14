const Movies = require('../models/Movies');

exports.create = (moviesData) => Movies.create(moviesData);

exports.getTopMovies = () => Movies.find().sort({createdAt: -1}).limit(3).lean();

exports.getAll = () => Movies.find().lean();

exports.getOne = (id) => Movies.findById(id).lean();

