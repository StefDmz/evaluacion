const { db } = require('../config/firebaseConfig');
const express = require('express');
const routes = express.Router();

//Get all products
routes.get('/', async (req, res) => {
    try {
        const products = await db.collection("products").get();
        const productList = [];

        if (!products.empty) {
            products.forEach(item => {
                productList.push({
                    id: item.id,
                    ...item.data()
                })
            });
        }

        return res.status(200).json(productList);
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error fetching products');
    }
});

//Get product by Id
routes.get('/:id', async (req, res) => {
    try {
        const product = await db.collection("products").doc(req.params.id).get();
        if(!product.exists){
            return res.status(404).send("Producto no encontrado");
        }
        return res.status(200).json({ id: product.id, ...product.data() });
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error fetching product');
    }
});

//Get products by CategoryId
routes.get('/category/:categoryId', async (req, res) => {
    try {
        const { categoryId } = req.params;

        const products = await db.collection("products")
            .where("categoryId", "==", categoryId).get();
        
        const productList = [];

        if(!productList.empty){
            products.forEach(item => {
                productList.push({
                    id: item.id,
                    ...item.data()
                });
            });
        }

        return res.status(200).json(productList);
    } catch (error) {
        console.log("Error al buscar productos por categoría ", error);
        res.status(500).send("Error fetching products by category");
    }
});

//Add product
routes.post('/', async (req, res) => {
    try {
        const {  name, description, price, image, categoryId, stock, rating, sku, available } = req.body;
        const newProduct = await db.collection('products').add({
            name,
            description,
            price,
            image,
            categoryId,
            stock,
            rating,
            sku,
            available
        });
        return res.status(201).json({ id: newProduct.id });
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error fetching products');
    }
});

module.exports = routes;