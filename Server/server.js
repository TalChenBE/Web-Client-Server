var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/homePage.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/login.html"));
});

app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname + "/sign-up.html"));
});

app.listen(port);
console.log("Server started! At http://localhost:" + port);