const express = require('express')
const router = express.Router()
const Task = require('../models/tasks.js')

///////////////////////////////
// TASKS ROUTES
////////////////////////////////

// TEST //
// router.get('/', (req, res) => {
//     res.send('Hello world')
// })

// INDEX //
router.get('/', async (req, res) => {
    try {
        res.json(await Task.find())
    } catch (err) {
        res.status(400).json(err)
    }
})

// CREATE //
router.post('/', async (req, res) => {
    try {
        res.json(await Task.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

// UPDATE //
router.put('/:id', async (req, res) => {
    try {
        res.json(await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch (err) {
        res.status(400).json(err)
    }
})

// DELETE //
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Task.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router