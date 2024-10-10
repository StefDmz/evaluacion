const { db } = require('../config/firebaseConfig');
const express = require('express');
const routes = express.Router();

//Get all schedules
routes.get('/', async (req, res) => {
    try {
        const schedules = await db.collection("schedules").get();
        const scheduleList = [];

        if (!schedules.empty) {
            schedules.forEach(item => {
                scheduleList.push({
                    id: item.id,
                    ...item.data()
                })
            });
        }

        return res.status(200).json(scheduleList);
    } catch (error) {
        console.log('Sucedió un error: ', error);
        res.status(500).send('Error fetching schedules');
    }
});

module.exports = routes;