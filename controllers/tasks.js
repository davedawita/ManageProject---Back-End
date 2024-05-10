const express = require('express')
const router = express.Router()
const Task = require('../models/tasks.js')

///////////////////////////////
// TASKS ROUTES
////////////////////////////////

// TEST //
router.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = router