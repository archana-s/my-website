var express = require('express')
var app = express()
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')))
app.use('/web-components', express.static(path.join(__dirname, '/web-components')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.use('/content', express.static(path.join(__dirname, '/content')))
