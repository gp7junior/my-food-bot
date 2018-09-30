const express = require('express')
const request = require('request');
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

// Recast will send a post request to /errors to notify important errors
// described in a json body
app.post('/errors', (req, res) => {
    console.error(req.body);
    res.sendStatus(200);
});

// Setting up the routes
//app.post('/find-restaurant', findRestaurants);
app.post('/find-restaurant', (req, res) => {

    const options = {
      url: 'https://362a6880.ngrok.io/my_food/query',
      method: 'GET',
      headers: {
          'template': 'application/json',
          'query': 'SELECT ?subject ?predicate ?object WHERE { ?subject ?predicate ?object} LIMIT 25'
      }
    };

    request(options, function(err, res, body) {
      let json = JSON.parse(body);
      console.log(json);
    });

    res.json({
      replies: [
        { type: 'text', content: `I still have to implement this skill find restaurant` },
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
