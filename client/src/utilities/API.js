import axios from 'axios';

export default {
	getUser: (userId) => {
		return axios.get(`/api/users/${userId}`);
	},
	findOrCreateIngredient: (userId) => {
			return axios.post(`/api/pantry/${userId}`);
	},
	// findFavorites: (userId) => {
	// 	return axios.get(`/api/favorites/${userId}`);
	// },
	// addFavorite: (userId) => {
	// 	return axios.put(`/api/favorites/${userId}`);
	// },
	// deleteFavorite: (userId) => {
	// 	return axios.put(`/api/favorites/delete/${userId}`);

	getAllIngredients: () => {
		return axios.get(`/api/pantry/`);
	},
	// updatePantryItem: (userId) => {
	// 	return axios.put(`/api/pantry/update/${userId}`);
	// },
	// deletePantryItem: (userId) => {
	// 	return axios.put(`/api/pantry/delete/${userId}`);
	// },
	ingredientSearch: (query) => {
		return axios.get(`/api/spoon/ingredient-search/${query}`);
	},
	recipeSearchRaw: (recipeName, number) => {
		return axios.get('/api/spoon/recipe-search');
	},
	recipeSearchByIngredient: (ingredientArray, number) => {
		return axios.get('/api/spoon/recipe-by-ingredient');
	},
	getRecipeData: (recipeId) => {
		return axios.get('/api/spoon/recipe/data');
	}
};
