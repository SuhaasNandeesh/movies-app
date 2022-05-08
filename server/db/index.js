const mongoose = require('mongoose')

mongoose
<<<<<<< HEAD
    .connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true })
=======
    .connect('mongodb://23.22.111.212:5000/cinema', { useNewUrlParser: true })
>>>>>>> parent of 0077b1a (Revert "mongodb default port update")
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
