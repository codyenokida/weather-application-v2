const express = require('express');
const router = express.Router();
require('dotenv').config();

const fetch = require('node-fetch');

// @route   GET api/weather
// @desc    Get Weather API based off query results
// @access  Public
router.get('/', (req, res) => {
    const api_key = process.env.API_KEY;
    const zipcode = req.query.zipcode;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    });
});

module.exports = router