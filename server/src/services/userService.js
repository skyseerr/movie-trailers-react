const Users = require('../models/User');

exports.getOne = (id) => Users.findById(id).select(['-password']).lean();

