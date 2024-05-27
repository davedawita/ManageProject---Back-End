require('dotenv').config()
const { MONGO_URI, PORT } = process.env
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

///////////////////////////////
// MiddleWare
////////////////////////////////

app.use(express.json())
app.use(cors())

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

const userController = require('./controllers/users.js')
app.use('/', userController)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})