require('dotenv').config()
const { MONGO_URI, PORT } = process.env
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors())
app.use(express.json())

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGO_URI)
mongoose.connection
    .on('open', () => console.log('You are connected to MongoAtlas'))
    .on('close', () => console.log('You are disconnected from MongoAtlas'))
    .on('error', (error) => console.log(error))

///////////////////////////////
// CONTROLLERS
////////////////////////////////
const tasksController = require('./controllers/tasks.js')
app.use('/tasks', tasksController)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})