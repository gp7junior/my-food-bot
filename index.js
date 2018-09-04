const express = require('express')
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

app.post('/place-to-eat-by-cuisine', (req, res) => {
    console.log("[POST] /test");
    res.json({
      replies: [
        { type: 'text', content: `I still have to implement this skill: restaurant-cuisine ` },
      ],
    });
});
