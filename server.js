require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require("passport");
const users = require("./routes/api/users");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
const db = require("./config/keys").mongoURI;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://admin:7KZaMWL%4inP@ds015849.mlab.com:15849/heroku_m1kcxm85";
console.log(MONGODB_URI);

if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
}
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log("MongoDB connected successfully"))
	.catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

// app.use("/api/users", users);

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
