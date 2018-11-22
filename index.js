const express = require('express')
const request = require('request-promise'); // reconsider?
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json())
    .use('/', routes)
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

//TODO: write all queries to be put in the models folder