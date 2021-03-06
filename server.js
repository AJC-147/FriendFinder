var bodyParser = require('body-parser')
var path = require('path')
var express = require('express')
var app = express()
var apiRoutes = require("./routing/apiRoutes")
var htmlRoutes = require("./routing/htmlRoutes") 

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

//app.use('/', htmlRoutes)
//app.use('/api', apiRoutes)

//app.use('/birds', birds)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
