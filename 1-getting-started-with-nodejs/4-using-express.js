const path = require('path')
const express = require('express')
const app = express()

app.get('/foo', function (req, res) {
  res.send('Foo')
})

app.get('/bar', function (req, res) {
  res.send('bar')
})

app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})