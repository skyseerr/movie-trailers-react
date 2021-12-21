const router = require('express').Router();

const authService = require('../services/authService');
const {
    AUTH_COOKIE_NAME
} = require('../constants');


router.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        let userData = await authService.login({
            email,
            password
        });

        res.send({
            userData
        });

    } catch (error) {

        // res.status(403).send(error.message)
        res.status(403).send({"error": "Invalid username or password"})

    }

});

router.post('/register', async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body;


    try {
        //registration =>
        await authService.register({
            name,
            email,
            password
        });

        let userData = await authService.login({
            email,
            password
        })

        res.send({
            userData
        });

    } catch (error) {
        res.status(403).send({"error": "Email already exists!"})
    }
});


module.exports = router;