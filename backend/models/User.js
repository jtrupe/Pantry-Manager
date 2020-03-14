const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//stretch goal: add intolerences/allergies
// --> exclude from query results

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	pantry: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Ingredient'
		}
	],
	favorites: []
});

const User = mongoose.model('users', userSchema);

module.exports = User;

// pantry: [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'Ingredient',
//         stock: {
//             measure: {
//                 type: String,
//                 enum: ["g" , "mL", "units", ""],
//                 default: ""
//             },
//             quantity: {
//                 type: Number,
//                 default: 0
//             }
//         }
//     }
// ],
