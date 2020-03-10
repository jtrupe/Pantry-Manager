const app = require('express').Router();
const pantryController = require('../../controllers/pantryController');

app.route('/api/pantry')
    .get(pantryController.findAllIngriedients)
    .post(pantryController.createIngredient);

app.route('/api/pantry/update/:userId').put(pantryController.updateStock);

app.route('/api/pantry/delete/:userId').put(pantryController.deleteStock);

module.exports = app;