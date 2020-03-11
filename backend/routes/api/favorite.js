const app = require('express').Router();
const favoriteController = require('../../controllers/favoriteController');

app.route('/:userId')
    .get(favoriteController.findAllFavorites)
    .put(favoriteController.createFavorite);

app.route('/delete/:userId').put(favoriteController.deleteFavorite);

module.exports = app;