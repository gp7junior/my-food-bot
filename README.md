# my food bot curator :robot:

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:gp7junior/my-food-bot.git # or clone your own fork
$ cd my-food-bot
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku (fancy way)

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

or

## Deploying to GitHub (smart way 🤓)

```
$ git init
$ git add .
$ git commit -m "Bla bla bla"
$ git remote add origin "git@github.com:gp7junior/my-food-bot.git"
$ git push origin master
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

For more information about Bots on Recast.ai, see the tutorial page on their blog:

- [Github repo Heroku](https://recast.ai/blog/github-repo-heroku/)
