const fs = require('fs')
fs.readFile('./data/poetry.txt', 'utf-8', (err, res) => {
  console.log(res.split('\n'))
})