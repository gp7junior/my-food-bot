const express = require('express');
const dbSetup = require('../controllers/dbSetup.js');

var router = express.Router();

// Recast will send a post request to /errors to notify important errors
// described in a json body
router.post('/errors', (req, res) => {
  console.error(req.body);
  res.sendStatus(200);
});

// Setting up the routes
//app.post('/find-restaurant', findRestaurants);
router.post('/find-restaurant', (req, res) => {
  var query_txt = "match $x isa cuisine; get;";
  dbSetup(query_txt);
});

router.post('/find-restaurant-by-cuisine', (req, res) => {
  var query_txt = "match $x isa cuisine; get;";
  dbSetup(query_txt);
});

module.exports = router;
