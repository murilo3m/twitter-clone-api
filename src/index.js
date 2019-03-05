const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://goweek:goweek123@ds163156.mlab.com:63156/goweek-backend', {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.listen(3000, () => {
    console.log(':) Server started at port 3000')
})