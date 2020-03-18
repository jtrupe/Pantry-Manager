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
					.then(async(found) => {
						// console.log(found);
						const updatedData = { $push: { ingredients: found._id } };
						let userPantry = await db.User.findById({_id: userId}).then(results=> results.ingredients);
						// console.log("Current User", userPantry);
						let pantryContainsItem = userPantry.includes(found._id)
						// console.log(pantryContainsItem);
						if(!pantryContainsItem){
							db.User
							.findOneAndUpdate({ _id: userId }, { $push: { ingredients: found._id } }, { new: true })
							.then((result) => res.json(result));
						} else{
							console.log("Item already in user pantry");
						}
					
					})
					.catch((result) => res.json('Item in user pantry already'));
			});
	},
	removeItemFromUser: (req,res) =>{
		db.User.findOne({_id: req.params.userId}).populate("ingredients").then(user=>{
			const oldPantry = user.ingredients;
			const newPantry= oldPantry.filter((i)=>i.ingredient !== req.params.ingredient);
			db.User.update({_id: req.params.userId},{ingredients: newPantry}).then(result =>{
				console.log("Item removed from pantry");
				res.json(result);
			})
		})
	}
};
