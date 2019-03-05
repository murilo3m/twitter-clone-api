const express = require('express')

const routes = express.Router()

const TweetController = require('./controller/TweetController')
const LikeController = require('./controller/LikeController')

//Tweet Routes
routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetController.store)

//Like Routes
routes.post('/likes/:id', LikeController.store)

module.exports = routes