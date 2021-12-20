const { isAuth }  = require("../middlewares/authMiddleware.js");
const router = require('express').Router();

const userService = require('../services/userService');

router.get('/', isAuth, async (req, res) => {
    
    let user = await userService.getOne(req.user._id);

    try {
        res.send(user);
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = router;