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

app.use('/products', products);
app.use('/categories', categories);
app.use('/schedules', schedules);

exports.app = functions.https.onRequest(app);