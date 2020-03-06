const db = require('../models');

// SEMI PSEUDO CODE
module.exports = {
    createFavorite: (req, res) => {
        db.User.updateOne().then(newResult => {
            res.json(newResult)
        })
    },
    deleteFavorite: (req, res) => {
        db.User.updateOne().then(deleted => {
            res.json(deleted);
        })
    }
}