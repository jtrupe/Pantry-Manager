const app = require('express').Router();
const favoriteRoute = require('./favorite');
const pantryRoute = require('./pantry');
const usersRoute = require('./users');

app.use('/users', usersRoute);
app.use('/favorites', favoriteRoute);
app.use('/pantry', pantryRoute);

module.exports = app;