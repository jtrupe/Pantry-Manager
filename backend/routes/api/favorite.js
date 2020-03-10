const app = require('express').Router();
const favoriteController = require('../../controllers/favoriteController');

app.route('/api/favorites/:userId')
    .get(favoriteController.findAllFavorites)
    .put(favoriteController.createFavorite);

app.route('/api/favorites/delete/:userId').put(favoriteController.deleteFavorite);

module.exports = app;