const app = require('express').Router();
const favoriteRoute = require('./favorite');
const pantryRoute = require('./pantry');
const usersRoute = require('./users');
const spoonRoute = require('./spoon')

app.use('/users', usersRoute);
app.use('/favorites', favoriteRoute);
app.use('/pantry', pantryRoute);
app.use('/spoon', spoonRoute)

module.exports = app;