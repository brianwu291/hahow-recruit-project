const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const keys = require('./config/key')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(express.static('build', {
  setHeaders: function (res) {
    res.set('x-timestamp', Date.now())
  }
}))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'), {
    headers: { "Content-Length": "324" }
  })
})

app.listen(port)