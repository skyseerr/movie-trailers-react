const { isAuth }  = require("../middlewares/authMiddleware.js");
const router = require('express').Router();

const moviesService = require('../services/moviesService');

router.post('/create', async (req, res) => {
    try {
        await moviesService.create({...req.body, owner: req.user._id});
        
        res.send(req.body);

    } catch (error) {
        res.status(500).end();
    }
});

router.get('/:movieId/details', async (req, res) => {
    
    let movie = await moviesService.getOne(req.params.movieId);

    try {
        res.send(movie);
    } catch (error) {
        res.status(404).send(error)
    }
       
});

router.get('/movies', async (req, res) => {
    let movies = await moviesService.getAll();

    res.send(movies);
});

router.get('/lastsix', async (req,res) => {
    let lastSixMovies = await moviesService.getLastSix()

    res.send(lastSixMovies)
});

module.exports = router