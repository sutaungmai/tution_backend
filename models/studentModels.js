const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    payment: {
        type: Number,
    }
}, {timestamps: true})


module.exports = mongoose.model('Student',studentSchema)