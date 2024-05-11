const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    dateCreated: {type: String, required: true},
    dateDue: {type: String, required: true},
    status: {type: String, enum: ['To Do', 'Doing', 'Done'], required: true}
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task