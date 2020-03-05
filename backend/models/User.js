const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pantry: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ],
    favorites: []
})

const User = mongoose.model('User', userSchema);

module.exports = User;