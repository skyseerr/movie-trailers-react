const jwt = require('../utils/jwt');
const {
    JWT_SECRET
} = require('../constants');

exports.auth = function (req, res, next) {
    let token = req.headers.authorization;

    if (token) {
        const splittedToken = token.split(' ')[1];

        jwt.verify(splittedToken, JWT_SECRET)
            .then(decodedToken => {

                req.user = decodedToken;
                res.locals.user = decodedToken;
                next();
            })
            .catch(err => {
                res.status(403).send(err)
            })
    } else {
        next();
    };
};

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(403).send('You need to be logged in.');
    }
};
