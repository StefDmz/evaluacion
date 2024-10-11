const { db } = require('../config/firebaseConfig');
const express = require('express');
const routes = express.Router();

//Add order
routes.post('/', async (req, res) => {
    try {
        const {  clientName, clientTelephone, deliveryType, neighborhood, 
            street, exteriorNumber, interiorNumber, references, paymentMethod, comentaries, orderDate, tips, discountId } = req.body;
        const newOrder = await db.collection('orders').add({
            clientName,
            clientTelephone,
            deliveryType,
            neighborhood,
            street,
            exteriorNumber,
            interiorNumber,
            references,
            paymentMethod,
            comentaries,
            orderDate,
            tips,
            discountId
        });
        return res.status(201).json({ id: newOrder.id });
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error inserting orders');
    }
});

module.exports = routes;