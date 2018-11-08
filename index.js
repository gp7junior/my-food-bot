const express = require('express')
const request = require('request-promise'); // reconsider?
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const sparql_enpoint = 'https://java-http-myfood.herokuapp.com/data/query';

const app = express();

app.use(bodyParser.json())
   .use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .get('/', (req, res) => res.render('pages/index'))
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// Recast will send a post request to /errors to notify important errors
// described in a json body
app.post('/errors', (req, res) => {
    console.error(req.body);
    res.sendStatus(200);
});

// Setting up the routes
//app.post('/find-restaurant', findRestaurants);
app.post('/find-restaurant', (req, res) => {
    const oprtions = {
      method: 'GET',
      uri: sparql_enpoint,
      qs: {'PREFIX myfood: <http://www.semanticweb.org/gp7junior/ontologies/2018/6/my-food-ontology#> SELECT ?subject ?object WHERE { ?subject rdf:type myfood:Restaurant }'}
    }
    request(options)
      .then( (query_result) => {
        console.log(query_result)
      })
      .catch((err) => {console.log(err)});

    res.json({
      replies: [
        { "type": "carousel",
          "content": [
            {
              "title": "My first place to eat",
              "subtitle": "A beautiful restaurant",
              "imageUrl": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-0.3.5&s=bf5b94b642532375b945fec883f6e8e2&auto=format&fit=crop&w=500&q=60",
              "buttons": [
                {
                  "title": "Book a table",
                  "type": "BUTTON_1_TYPE",
                  "value": "BUTTON_1_VALUE"
                }
              ]
            },
            {
              "title": "My second place to eat",
              "subtitle": "Another beautiful restaurant",
              "imageUrl": "https://images.unsplash.com/reserve/tHTHup3YTN6XsLwf43vY_IMG_8003.jpg?ixlib=rb-0.3.5&s=f016599f7772fa3d06eb5e821860c7a0&auto=format&fit=crop&w=500&q=60",
              "buttons": [
                {
                  "title": "Book a table",
                  "type": "BUTTON_2_TYPE",
                  "value": "BUTTON_2_VALUE"
                }
              ]
            }
          ]
        },
      ],
    });
});

app.post('/find-restaurant-by-cuisine', (req, res) => {
    res.json({
      replies: [
        { type: 'text', content: `I still have to implement this skill find restaurant by cuisine ` },
      ],
    });
});
