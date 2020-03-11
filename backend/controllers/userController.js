const db = require('../models');

// SEMI PSEUDO CODE
module.exports = {
    // method for letting user update their pantry items and quantities
    // needs associated route
    userGoesShopping: (req, res) => {
        db.User.update()    //oldPantry + shoppingList => newPantry) 
            .then(newPantry => res.json(newPantry))
    },
    // method simulates the act of cooking on the pantry
    // needs associated route
    userMakesMeal: (req, res) => {
        db.User.update()    //pantry - recipeQuantities => newPantry)
            .then(pantryLeft => res.json(pantryLeft))
    },
}