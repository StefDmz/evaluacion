const { db } = require('../config/firebaseConfig');
const express = require('express');
const routes = express.Router();

//Add order
routes.post('/', async (req, res) => {
    try {
        const {  orderId, productId, quantity } = req.body;
        const newOrderDetail = await db.collection('order-details').add({
            orderId,
            productId,
            quantity
        });
        return res.status(201).json({ id: newOrderDetail.id });
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error inserting order detail');
    }
});

module.exports = routes;