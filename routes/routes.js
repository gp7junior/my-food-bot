const express = require('express');
const dbSetupRestaurant = require('../controllers/dbSetupRestaurant.js');
const dbSetupRestaurantCuisine = require('../controllers/dbSetupRestaurantCuisine.js');
const readQuery = require('../controllers/readQuery.js');
const util = require('util');
const fs = require('fs');

var router = express.Router();

// Recast will send a post request to /errors to notify important errors
// described in a json body
router.post('/errors', (req, res) => {
  console.error(req.body);
  res.sendStatus(200);
});

// Setting up the routes

//app.post('/find-restaurant', findRestaurants);
//TODO: improve the query to find a restaurant
router.post('/find-restaurant', (req, res) => {
  var query_txt = "match $x isa restaurant; get;";

  const restaurants = dbSetupRestaurant(query_txt);

  var data_result_JSON = [];

  var promise = Promise.resolve(restaurants);
  promise
      .then(function(value){
        value.forEach(function(v){
          data_result_JSON.push({
              "title": v.id,
              "subtitle": "A beautiful restaurant",
              "imageUrl": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-0.3.5&s=bf5b94b642532375b945fec883f6e8e2&auto=format&fit=crop&w=500&q=60",
              "buttons": [
                {
                  "title": "Book a table",
                  "type": "BUTTON_1_TYPE",
                  "value": "BUTTON_1_VALUE"
                }
              ] 
          });
        });
      })
      .then(function(value){
        res.json({
          replies: [
            { "type": "carousel",
              "content": data_result_JSON
            }
          ]
        });
      });
});
  
//app.post('/find-restaurant-by-cuisine', findRestaurantsByCuisine);
//TODO: improve the query to find a restaurant by cuisine
router.post('/find-restaurant-by-cuisine', (req, res) => {
  var query_txt = "match $x isa cuisine; get;";
  
  const cuisines = dbSetupRestaurantCuisine(query_txt);

  var data_result_JSON = [];

  var promise = Promise.resolve(cuisines);
  promise
      .then(function(value){
        value.forEach(function(v){
          data_result_JSON.push({
              "title": v.id,
              "subtitle": "A beautiful restaurant",
              "imageUrl": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-0.3.5&s=bf5b94b642532375b945fec883f6e8e2&auto=format&fit=crop&w=500&q=60",
              "buttons": [
                {
                  "title": "Book a table",
                  "type": "BUTTON_1_TYPE",
                  "value": "BUTTON_1_VALUE"
                }
              ] 
          });
        });
      })
      .then(function(value){
        res.json({
          replies: [
            { "type": "carousel",
              "content": data_result_JSON
            }
          ]
        });
      });

});

router.post('/print_query', (req,res) => {
  var query_path = './models/query_rest_cuisine.gql';
  
  const readFile = util.promisify(fs.readFile);

  async function getStuff() {
      return await readFile(query_path);
  }

  getStuff().then(data => {
      console.log("data:" + data);
  })
  
});

//TODO: add more routes according to what we want to get from our database

module.exports = router;