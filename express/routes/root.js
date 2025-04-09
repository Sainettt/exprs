const express = require('express')
const { getRouteHandler } = require('../controllers/rootController')
const rootRouter = express.Router()

rootRouter.get('/', getRouteHandler)
module.exports = rootRouter
