const app = require('express').Router();
const pantryController = require('../../controllers/pantryController');

app.route('/')
    .get(pantryController.findAllIngriedients)
    .post(pantryController.createIngredient);

app.route('/update/:userId').put(pantryController.updateStock);

app.route('/delete/:userId').put(pantryController.deleteStock);

module.exports = app;