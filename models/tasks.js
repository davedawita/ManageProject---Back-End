const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    dateCreated: {type: Date, default: Date.now, required: true},
    dateDue: {type: Date, required: true},
    status: {type: String, enum: ['To Do', 'Doing', 'Done'], required: true}
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task