const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://goweek:goweek123@ds163156.mlab.com:63156/goweek-backend', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(require('./routes.js'))

app.listen(3000, () => {
    console.log(':) Server started at port 3000')
})