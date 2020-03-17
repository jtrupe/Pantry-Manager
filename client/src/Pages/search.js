import React from "react";


function Search(props) {


    console.log(props);

    return (
        <div className="container">

            <h3 className="text-center my-3">Search by Recipe Name</h3>

            <div className="text-center search-recipe-name-div mt-3">


                <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>

                    <input type="text" name="recipeName" />

                    <button>Search</button>

                </form>
            </div>
            <div className="container">
                <div className="row">
                   
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe.id} className="col-md-4">
                        <div className="recipe__box">
                            <div >
                                
                        <img className="recipe__box-img"
                            src={"https://spoonacular.com/recipeImages/" + recipe.id + "-312x150.jpg"}
                            alt="recipies" />
                        <div className="recipe__text"> <h5>{recipe.title}</h5></div>
                    </div>
                    </div>
                    </div>
                )
            })}
                        
                        
                    </div>
            </div>
        </div>


    );
}


export default Search; 