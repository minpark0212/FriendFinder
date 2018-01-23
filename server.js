var express = require("express");
var apiRoutes = require("/.apiRoutes");
var htmlRoutes = require("./htmlRoutes");

var app = express();

apiRoutes(app);
htmlRoutes(app);


app.get("/", function(req, res){
	res.end();
})