const mongoose = require('mongoose')

mongoose
    .connect('mongodb://23.22.111.212:5000/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
