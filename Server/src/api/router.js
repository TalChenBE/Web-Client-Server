const express = require('express')

const router = express.Router()

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/homePage.html"));
  });
  
router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/login.html"));
  });
  
router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname + "/sign-up.html"));
  });

module.exports = router