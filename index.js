const express = require('express')
const request = require('request'); // reconsider?
const {SparqlClient, SPARQL} = require('sparql-client-2');
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
app.use(bodyParser.json())
   .use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .get('/', (req, res) => res.render('pages/index'))
   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const client = new SparqlClient('https://362a6880.ngrok.io/my_food/sparql')
   .register(
     db: 'http://362a6880.ngrok.io/my_food/'
   );

// Recast will send a post request to /errors to notify important errors
// described in a json body
app.post('/errors', (req, res) => {
    console.error(req.body);
    res.sendStatus(200);
});

// Setting up the routes
//app.post('/find-restaurant', findRestaurants);
app.post('/find-restaurant', (req, res) => {
    res.json({
      replies: [
        { "type": "carousel",
          "content": [
            {
              "title": "CARD_1_TITLE",
              "subtitle": "CARD_1_SUBTITLE",
              "imageUrl": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-0.3.5&s=bf5b94b642532375b945fec883f6e8e2&auto=format&fit=crop&w=500&q=60",
              "buttons": [
                {
                  "title": "BUTTON_1_TITLE",
                  "type": "BUTTON_1_TYPE",
                  "value": "BUTTON_1_VALUE"
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
