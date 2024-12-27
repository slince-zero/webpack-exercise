const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/indexs.html')
  const content = fs.readFileSync(pathToHtmlFile, 'utf-8')
  res.send(content)
})

app.listen(9000, () => {
  console.log('http://localhost:9000')
})
