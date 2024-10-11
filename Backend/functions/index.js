const express = require('express');
const functions = require('firebase-functions');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: true
}));

app.use(express.json());

//Routes
const products = require('./controller/products.js');
const categories = require('./controller/categories.js');
const schedules = require('./controller/schedules.js');
const orders = require('./controller/orders.js');
const ordersDetail = require('./controller/order-details.js');

app.use('/products', products);
app.use('/categories', categories);
app.use('/schedules', schedules);
app.use('/orders', orders);
app.use('/order-details', ordersDetail);

exports.app = functions.https.onRequest(app);