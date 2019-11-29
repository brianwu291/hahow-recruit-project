const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(express.static('build'))

function createOption(input = 'js') {
  const mappingObj = {
    js: 'application/javascript',
    html: 'text/html'
  }
  return {
    root: path.join(__dirname, 'build'),
    headers: {
      'Access-Control-Allow-Origin': '*/*',
      'Content-Type': mappingObj[input]
    }
  }
}

app.get('*', (req, res) => {
  res.sendFile('index.html', createOption('html'))
  res.sendFile('bundle.js', createOption('js'))
})

app.listen(port)