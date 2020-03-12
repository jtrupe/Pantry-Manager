// require('dotenv').config();
const axios = require('axios');
module.exports = {
    // apiKey: () => process.env.SPOONACULAR_KEY;

    // all of these methods are essentially the same
    // axios.get call to spoony api -->  results.json()
    //possibly try to write one function which accomplishes all
    //could use switch statement
    ingredientSearch: (ingString, numResults) => {
       const url = "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + ingString + "&number=" + numResults +"&apiKey=";
       const queryUrl = url + process.env.SPOONACULAR_KEY;

       axios.get(queryUrl).then(results => results.json())
    },
    recipeSearchRaw: (recipeName, numResults) => {
        const url = "https://api.spoonacular.com/recipes/search?query=" 
            + recipeName + "&number=" + numResults + "&instructionsRequired=true" + "&apiKey=" ;
        const queryUrl = url + process.env.SPOONACULAR_KEY;

        axios.get(queryUrl).then(recipeResults => recipeResults.json())
    },
    recipeSearchByIngredients: (ingArr, numResults) => {
        let arrToString = ingArr.join(",+");
        const url = "https://api.spoonacular.com/recipes/findByIngredients?" + "ingredients=" + arrToString +
            "&number=" + numResults + "&apiKey=" ;
        const queryUrl = url + process.env.SPOONACULAR_KEY;
        axios.get(queryUrl).then(searchResults => searchResults.json());
    },
    getRecipeData: (recipeId) => {
        const url = "https://api.spoonacular.com/recipes/" + recipeId +"/information?" + "includeNutrition=false" + " &apiKey=" ;
        const queryUrl = url + process.env.SPOONACULAR_KEY ;
        axios.get(queryUrl).then(recipeInfo => recipeInfo.json())
    }
}
