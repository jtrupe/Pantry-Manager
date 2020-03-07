const db = require('../models');

module.exports = {
    createIngredient: (req, res) => {
        db.Ingredient.create({ name : req.body.name}).then(newItem => {
            res.json(newItem);
        })
    }
}