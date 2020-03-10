const db = require('../models');

module.exports = {
    findAllIngriedients: (req,res) => {
        db.Ingredient.find().then(ingredients => {
            res.json(ingredients);
        })
    },
    createIngredient: (req, res) => {
        db.Ingredient.create({ name : req.body.name}).then(newItem => {
            res.json(newItem);
        })
    },
    updateStock: (req,res) => {
        db.User.updateOne().then(updated => {
            res.json(updated);
        })
    },
    deleteStock: (req,res) => {
        db.User.updateOne().then(updatedPantry => {
            res.json(updatedPantry);
        }) 
    }
}