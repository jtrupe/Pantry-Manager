const db = require('../models');

// SEMI PSEUDO CODE
module.exports = {
    findAllFavorites: (req,res) => {
        db.User.findOne().then(favorites => {
            res.json(favorites);
        })
    },
    createFavorite: (req, res) => {
        db.User.updateOne().then(newFavorite => {
            res.json(newFavorite)
        })
    },
    deleteFavorite: (req, res) => {
        db.User.updateOne().then(deleted => {
            res.json(deleted);
        })
    }
}