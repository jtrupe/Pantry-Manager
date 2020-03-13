import React from "react";

import "./style.css";

function Pantry() {
    


        return (
            <div className="container">

                <div className="title text-center mb-0 py-3">
                    <h1 className="display-4 text-center m-2">Pantry</h1>
                </div>

                <div className="row">

                    <div className="col-sm-6 pt-3 add">
                        <h2 className="text-center"><u>Add Ingredients</u></h2>
                        <input type="text" id="ingredient-search" className="form-control" placeholder="start typing to find your ingredient" />
                        <div className="returned-search-items mt-4"></div>
                    </div>

                    <div className="myIngredients col-sm-6 pt-3">
                        <h2 className="text-center mb-4"><u>My Ingredients</u></h2>
                        <div className="ingredient-list"></div>
                        {/* {{#each data}} */}
                        <div className="pantry-item ml-3 font-weight">
                            Item Name: {}
                            <button value="{ }"
                                className="pantry-item-remove text-center btn btn-outline-dark pl-2 pr-1 float-right"><span role="img" aria-label="x">❌</span></button>
                            <hr />
                        </div>
                        {/* {{/ each}} */}
                    </div>
                </div>
            </div>
        );
        }


export default Pantry; 
