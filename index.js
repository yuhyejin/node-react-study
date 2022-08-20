const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyejin:abcd1234@cluster0.egyxdh5.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connection...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))