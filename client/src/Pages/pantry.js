import React, { useState, useEffect } from 'react';
import { FormCheckbox, FormInput, FormGroup, Button } from 'shards-react';

import './style.css';
import API from '../utilities/API';
import axios from 'axios';

const ingredientStyle = {
	color: 'white',
	fontSize: '100%'
};
function Pantry(props) {
	console.log(props);
	const [ userData, setUserData ] = useState({ id: props.userId, pantry: [], favorites: [] });
	const [ queryString, setQueryString ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	const [ isUpdating, setIsUpdating ] = useState(false);
	const [ randomIngs, setRandomIngs ] = useState([]);
	const [ searchIngs, setSearchIngs ] = useState([]);

	//Fisher-Yates shuffle
	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ array[i], array[j] ] = [ array[j], array[i] ];
		}
		return array;
	}

	useEffect(
		() => {
			API.getAllIngredients().then((results) => {
				console.log(results.data);
				let ingArr = results.data.map((e) => e.ingredient);
				console.log(ingArr);
				let shuffled = shuffle(ingArr);
				console.log(shuffled);
				let sixRandom = shuffled.slice(0, 6);
				setRandomIngs(() => sixRandom);
			});

			API.getUser(userData.id).then((currentUser) => {
				let ingredientsIds = currentUser.data.ingredients;
				let mappedPantry = ingredientsIds.map((i) => i.ingredient);
				let mappedFavorites = currentUser.data.favorites.map((i) => i);
				console.log(mappedPantry);
				setUserData((currentState) => ({ ...currentState, pantry: mappedPantry, favorites: mappedFavorites }));
				setIsUpdating(false);
			});
		},
		[ isUpdating, userData.id ]
	);
	console.log(userData);
	console.log(randomIngs);

	// autocomplete search
	useEffect(
		() => {
			console.log(queryString);
			axios
				.get(
					`https://api.spoonacular.com/food/ingredients/autocomplete?query=${queryString}&number=5&apiKey=${process
						.env.REACT_APP_SPOONACULAR_KEY}`
				)
				.then((results) => {
					setSearchResults((currentState) => results.data);
				});
		},
		[ queryString ]
	);
	console.log(searchResults);
	//furhter dev: combine handle add/remove
	const handleAddItem = (item) => {
		API.findOrCreateIngredient(userData.id, item).then((results) => {
			console.log(results);
		});
		setIsUpdating(true);
	};

	const handleRemoveItem = (item) => {
		API.deletePantryItem(userData.id, item).then((results) => {
			console.log(results);
		});
		setIsUpdating(true);
	};

	const handleChange= (item) => {
		console.log(item)
		// console.log(searchIngs)
		// let oldIngs = searchIngs;
		// let newIngs = oldIngs.push(item);
		// setSearchIngs(currentState => newIngs)
	  }
	  console.log(searchIngs)
	return (
		<div className="container">
			<div className="title text-center mb-0 py-3">
				<h1 className="display-4 text-center m-2">Pantry</h1>
			</div>

			<div className="row">
				<div className="col-sm-6 pt-3 add">
					<h2 className="text-center">
						<u>Add Ingredients</u>
					</h2>
					<input
						type="text"
						id="ingredient-search"
						className="form-control"
						placeholder="start typing to find your ingredient"
						onKeyUp={(e) => setQueryString(e.target.value)}
					/>
					<div className="returned_search_items mt-4" />
					{searchResults.map((i) => {
						return (
							<div key={i.id} className="pantry-item ml-3 font-weight" style={ingredientStyle}>
								<strong>{i.name}</strong>
								<Button
									theme="dark"
									onClick={() => {
										handleAddItem(i.name);
									}}
									value={i.name}
									className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"
								>
									<span role="img" aria-label="+" style={ingredientStyle}>
										<strong>+</strong>
									</span>
								</Button>
								<hr />
							</div>
						);
					})}
				</div>

				<div className="myIngredients col-sm-6 pt-3">
					<h2 className="text-center mb-4">
						<u>My Ingredients</u>
					</h2>
					<div className="ingredient-list" />
					{userData.pantry.map((i) => {
						return (
							<div className="pantry-item ml-3 font-weight" style={ingredientStyle}>
								<span>
								<FormCheckbox 
									value= {i}
									onChange={(e,value)=>{
										handleChange(i)
									}}
									>
								<strong>{i}</strong>
									<Button
										theme="dark"
										onClick={() => {
											handleRemoveItem(i);
										}}
										value="i"
										className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"
									>
										<span role="img" aria-label="x">
											❌
										</span>
									</Button>
								</FormCheckbox>
								</span>
								<hr />
							</div>
						);
					})}
					<Button theme="light">
										Cook!
									</Button>
				</div>
			</div>

			<div className="random-items row">
				<div className="col-sm-6 pt-3 add">
					<h2 className="text-center">
						<u>Some Random Items</u>
					</h2>

					<div className="random-1 mt-4" />
					{randomIngs.filter((e, index) => index % 2 === 0).map((i) => {
						return (
							<div key={i} className="pantry-item ml-3 font-weight" style={ingredientStyle}>
								<strong>{i}</strong>
								<Button
									theme="dark"
									onClick={() => {
										handleAddItem(i);
									}}
									value={i}
									className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"
								>
									<span role="img" aria-label="+" style={ingredientStyle}>
										<strong>+</strong>
									</span>
								</Button>
								<hr />
							</div>
						);
					})}
				</div>

				<div className="random-2 col-sm-6 pt-3">
					<h2 className="text-center mb-4">
						<br />
					</h2>
					<div className="ingredient-list" />
					{randomIngs.filter((e, index) => index % 2 === 1).map((i) => {
						return (
							<div className="pantry-item ml-3 font-weight" style={ingredientStyle}>
								<strong>{i}</strong>
								<Button
									theme="dark"
									onClick={() => {
										handleAddItem(i);
									}}
									value="{ }"
									className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"
								>
									<span role="img" aria-label="+" style={ingredientStyle}>
										<strong>+</strong>
									</span>
								</Button>
								<hr />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Pantry;
