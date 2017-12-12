var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./model'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator');

var cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.use(function(err, req, res, next) {
	res.status(400).json(err);
})

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
