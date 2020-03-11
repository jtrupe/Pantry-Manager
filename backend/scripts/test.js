const db = require('../models');
const mongoose = require('mongoose');


const test = () => {
    db.User.find(
        // "name": "Jules",
        // "email": "jules@trupe.com",
        // "password": "password"
    ).then(result=> {
        console.log(result);
    });
};

test();