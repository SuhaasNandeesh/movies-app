const mongoose = require('mongoose')

mongoose
    .connect('mongodb://75.101.186.190:5000/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
