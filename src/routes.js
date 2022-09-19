const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const SalesControlles = require('./controllers/SalesControlles')

routes.get('/users', UserController.index)

routes.get('/products', ProductController.index)
routes.get('/products/:grupo', ProductController.productsByGroup)
routes.get('/products/:grupo/:codigo', ProductController.productByCode)

routes.get('/sales', SalesControlles.index)

module.exports = routes