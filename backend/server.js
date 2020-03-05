const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Final-Project';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(()=> console.log("MongoDB connected successfully"))
	.catch(err => console.log(err));

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
