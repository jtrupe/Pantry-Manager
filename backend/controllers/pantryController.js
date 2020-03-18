const db = require('../models');

module.exports = {
	findAllIngriedients: (req, res) => {
		db.Ingredient.find().then((ingredients) => {
			res.json(ingredients);
		});
	},
	findOrCreate: (req, res) => {
		// const name = req.body.ingredient;
		const userId = req.params.userId;
		const ingredient = req.params.ingredient;
		console.log(userId);
		db.Ingredient
			.create({ ingredient: req.params.ingredient })
			.then((created) => {
				console.log('Creating new Ingredient');
				console.log(created);
				const updatedData = { $push: { ingredients: created._id } };
				db.User
					.findOneAndUpdate({ _id: userId }, updatedData, { new: true })
					.then((result) => res.json(result));
			})
			.catch(() => {
				console.log('Item already exists in DB... finding now');
				db.Ingredient
					.findOne({ ingredient: req.params.ingredient })
					.then((found) => {
						console.log(found);
						const updatedData = { $push: { ingredients: found._id } };
						db.User
							.findOneAndUpdate({ unique: true }, { _id: userId }, updatedData, { new: true })
							.then((result) => res.json(result));
					})
					.catch((result) => res.json('Item in user pantry already'));
			});
	}
};
