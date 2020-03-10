const db = require('../models');

// SEMI PSEUDO CODE
module.exports = {
    createUser: (req, res) => {
        db.User.create().then(newUser => {
            res.json(newUser);
        })
    },
    // method for letting user update their pantry items and quantities
    userGoesShopping: (req, res) => {
        db.User.update()    //oldPantry + shoppingList => newPantry) 
            .then(newPantry => res.json(newPantry))
    },
    //method simulates the act of cooking on the pantry
    userMakesMeal: (req, res) => {
        db.User.update()    //pantry - recipeQuantities => newPantry)
            .then(pantryLeft => res.json(pantryLeft))
    },

}