const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(3000, () => {
  console.log('Battleship server running!')
})