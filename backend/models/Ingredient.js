const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    stock: {
        measure: {
            type: String,
            enum: ["g" , "mL", "units"]
        },
        quantity: {
            type: Number
        }
    }
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;