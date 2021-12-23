const { isAuth }  = require("../middlewares/authMiddleware.js");
const router = require('express').Router();

const moviesService = require('../services/moviesService');
const commentsService = require('../services/commentsService');

router.post('/create',isAuth, async (req, res) => {
    try {

        await moviesService.create({...req.body, owner: req.user._id});
        res.send(req.body);

    } catch (error) {
        res.status(500).end();
    }
});

router.get('/:movieId/details', async (req, res) => {
    
    try {
        let movie = await moviesService.getOne(req.params.movieId);
        res.send(movie);
    } catch (error) {
        res.status(404).send(error);
    }
       
});

router.get('/movies', async (req, res) => {

    try {
        let movies = await moviesService.getAll();
        res.send(movies);
    } catch (error) {
        res.send(error);
    }

});

router.get('/lastsix', async (req,res) => {

    try {
        let lastSixMovies = await moviesService.getLastSix()
        res.send(lastSixMovies);
    } catch (error) {
        res.send(error);
    }



});

router.get('/my-movies/:userId',isAuth, async (req, res) => {

    try {
        let lastFiveMovies = await moviesService.getLastFiveMine((req.params.userId));
        res.send(lastFiveMovies);
    } catch (error) {
        res.send(error);
    }

});

router.get('/my-movies-all/:userId',isAuth, async (req, res) => {

    try {
        let allMyMovies = await moviesService.getAllMine((req.params.userId));
        res.send(allMyMovies);
    } catch (error) {
        res.send(error);
    }


});

router.get('/:movieId/delete',isAuth, async (req, res) => {

    try {
       let deleted = await moviesService.delete(req.params.movieId)
        res.send(deleted);
    } catch (error) {
        res.send(error);
    }

});

router.post('/:movieId/edit',isAuth, async (req, res) => {

    try {
       let movie = await moviesService.updateOne(req.params.movieId, req.body);
        res.send(movie);
    } catch (error) {
        res.send(error);
    }

});

router.get('/:movieId/comments', async (req, res) => {

    try {
        let comments = await commentsService.getAllMovieComments(req.params.movieId);
        res.send(comments);
    } catch (error) {
        res.send(error);
    }

});

router.post('/comment/:movieId',isAuth, async (req, res) => {

    try {
        await commentsService.create({...req.body, owner: req.user._id, movie: req.params.movieId});
        res.send(req.body);
    } catch (error) {
        res.status(500).end();
    }

});

router.get('/catalog/:searchId', async (req, res) => {
    
    let movie = await moviesService.search(req.params.searchId);

    try {
        res.send(movie);
    } catch (error) {
        res.status(404).send(error);
    }
       
});

router.get('/catalog/category/:categoryName', async (req, res) => {
    
    try {
        let movie = await moviesService.getByCategory(req.params.categoryName);
        res.send(movie);
    } catch (error) {
        res.status(404).send(error);
    }
       
});

router.get('/catalog/category/:categoryName/:movieId', async (req, res) => {
    
    try {
        let movies = await moviesService.getByCategorySix(req.params.categoryName, req.params.movieId);
        res.send(movies);
    } catch (error) {
        res.status(404).send(error);
    }
       
});

module.exports = router;