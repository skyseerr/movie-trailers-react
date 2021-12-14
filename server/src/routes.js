const router = require('express').Router();

const authController = require('./controllers/authController');
const moviesController = require('./controllers/moviesController');
const userController = require('./controllers/userController');

router.use('/', moviesController)
router.use('/auth', authController);
router.use('/users', userController);

module.exports = router;
