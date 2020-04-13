const express = require('express')
require('dotenv').config()

const weatherRoute = require('./routes/api/weather')
const weeklyRoute = require('./routes/api/weekly')

const app = express()

app.use(express.json())

app.use('/api/weather', weatherRoute)
app.use('/api/weekly', weeklyRoute)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))