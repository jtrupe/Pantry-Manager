const db = require('../models');
const mongoose = require('mongoose');

const isValueInDB= function (value){
    db.Ingredient.find({ingredient : value}).then((err, result)=> {
        if(result = null){
            console.log(false)
        } else {
            console.log(result.ingredient)
        }
    })
};

isValueInDB("sugar");