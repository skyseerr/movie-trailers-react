const User = require('../models/User');
const jwt = require('../utils/jwt');
const { JWT_SECRET } = require('../constants');

exports.login = async ({email, password}) => {

    let user = await User.findOne({ email });

    
    if(!user){
        throw new Error('Invalid username or password');
    }
    
    let isValid = await user.validatePassword(password);

    if(!isValid){
        throw new Error('Invalid username or password');
    }

    let payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    };

    let token = await jwt.sign(payload, JWT_SECRET);

    return userData = {
        token,
        _id: user._id,
        name: user.name,
        email: user.email
    }
}

exports.register = (userData) => User.create(userData);