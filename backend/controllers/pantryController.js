const db = require('../models');

module.exports = {
    findAllIngriedients: (req,res) => {
        db.Ingredient.find().then(ingredients => {
            res.json(ingredients);
        })
    },
    // still need to add to loggedInUser's pantry
    createIngredient: (req, res) => {
        db.Ingredient.create({ name : req.body.name}).then(newItem => {
            res.json(newItem);
        })
    },
    updateStock: (req,res) => {
        let userId = req.body.userId;
        let ingredient = req.body.ingredient;
        let newStock = {
            measure: req.body.measure,
            quantity: req.body.quantity
        }
        // fix logic here
        db.User.updateOne({_id: userId}, {
            
        }).then(updated => {
            res.json(updated);
        })
    },
    // should be similar to method above
    deleteStock: (req,res) => {
        // where: userId needed
        db.User.updateOne().then(updatedPantry => {
            res.json(updatedPantry);
        }) 
    }
}