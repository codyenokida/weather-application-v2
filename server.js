const express = require('express')
const path = require('path')
require('dotenv').config()

const weatherRoute = require('./routes/api/weather')
const weeklyRoute = require('./routes/api/weekly')

const app = express()

app.use(express.json())

app.use('/api/weather', weatherRoute)
app.use('/api/weekly', weeklyRoute)

// Serve static assets if production
if (process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))