const db = require('../models');

// SEMI PSEUDO CODE//
module.exports = {
    findAllFavorites: (req,res) => {
        db.User.findOne().then(result => {
            res.json(result.favorites);
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