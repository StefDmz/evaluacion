const { db } = require('../config/firebaseConfig');
const express = require('express');
const routes = express.Router();

//Get all categories
routes.get('/', async (req, res) => {
    try {
        const categories = await db.collection("categories").get();
        const categoryList = [];

        if (!categories.empty) {
            categories.forEach(item => {
                categoryList.push({
                    id: item.id,
                    ...item.data()
                })
            });
        }

        return res.status(200).json(categoryList);
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error fetching categories');
    }
});

module.exports = routes;