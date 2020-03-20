const app = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

app.use('/api', apiRoutes);

app.use((req,res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname), '../../Final-Project/client/build/index.html');
});

module.exports = app;