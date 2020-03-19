const app = require('express').Router();
const pantryController = require('../../controllers/pantryController');

app.route('/')
    .get(pantryController.findAllIngriedients)

app.route('/:userId/:ingredient')
    .post(pantryController.findOrCreate)
    .put(pantryController.removeItemFromUser)


// app.route('/find').get(pantryController.findByName);
// app.route('/create')
    

// app.route('/create')
// .get(pantryController.findByName)


// app.route('/update/:userId').put(pantryController.updateStock);

// app.route('/delete/:userId').put(pantryController.deleteStock);

module.exports = app;