
const app = require('express').Router();
const spoon = require('../../scripts/spoon');

app.route('/ingredient-search/').get(spoon.ingredientSearch)
app.route('/recipe-search').get(spoon.recipeSearchRaw)
app.route('/recipe-by-ingredient').get(spoon.recipeSearchByIngredients)
app.route('/recipe-data').get(spoon.getRecipeData)

module.exports = app;