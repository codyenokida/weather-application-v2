const express = require('express');
const router = express.Router();
require('dotenv').config();

const fetch = require('node-fetch');

// @route   GET api/weather
// @desc    Get Weather API based off query results
// @access  Public
router.get('/', (req, res) => {
    // const api_key = process.env.API_KEY;
    fetch('https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=de90ed6aacc269cd76d38ca255a84f53')
    .then(res => res.json())
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    });
});

module.exports = router