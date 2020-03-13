// require('dotenv').config();
const axios = require('axios');
module.exports = {
	// apiKey: () => process.env.SPOONACULAR_KEY;

	// all of these methods are essentially the same
	// axios.get call to spoony api -->  results.json()
	//possibly try to write one function which accomplishes all
	//could use switch statement
	ingredientSearch: (req, res) => {
		let ingString = req.body.ingString;
		let numResults = req.body.number;
		const url =
			'https://api.spoonacular.com/food/ingredients/autocomplete?query=' +
			ingString +
			'&number=' +
			numResults +
			'&apiKey=';
		const queryUrl = url + process.env.SPOONACULAR_KEY;

		axios.get(queryUrl).then((results) => res.json(results));
	},
	recipeSearchRaw: (req, res) => {
		let recipeName = req.params.name;
		let numResults = req.params.number;
		const url =
			'https://api.spoonacular.com/recipes/search?query=' +
			recipeName +
			'&number=' +
			numResults +
			'&instructionsRequired=true' +
			'&apiKey=';
		const queryUrl = url + process.env.SPOONACULAR_KEY;

		axios.get(queryUrl).then((recipeResults) => res.json(recipeResults));
	},
	recipeSearchByIngredients: (req, res) => {
		let ingArr = req.body.ingredients;
		let numResults = req.body.number;
		let arrToString = ingArr.join(',+');
		const url =
			'https://api.spoonacular.com/recipes/findByIngredients?' +
			'ingredients=' +
			arrToString +
			'&number=' +
			numResults +
			'&apiKey=';
		const queryUrl = url + process.env.SPOONACULAR_KEY;
		axios.get(queryUrl).then((searchResults) => res.json(searchResults));
	},
	getRecipeData: (req, res) => {
		let recipeId = req.body.recipeId;
		const url =
			'https://api.spoonacular.com/recipes/' +
			recipeId +
			'/information?' +
			'includeNutrition=false' +
			' &apiKey=';
		const queryUrl = url + process.env.SPOONACULAR_KEY;
		axios.get(queryUrl).then((recipeInfo) => res.json(recipeInfo));
	}
};
