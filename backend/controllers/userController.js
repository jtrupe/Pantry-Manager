const db = require(',,/models');

// SEMI PSEUDO CODE
module.exports = {
    createUser: (req, res) => {
        db.User.create().then(newUser => {
            res.json(newUser);
        })
    },
    userGoesShopping: (req, res) => {
        db.User.update(//oldPantry + shoppingList => newPantry) 
            .then(newPantry => res.json(newPantry))
    },
    userMakesMeal: (req, res) => {
        db.User.update(//pantry - recipeQuantities => newPantry)
            .then(pantryLeft => res.json(pantryLeft))
    },

}