const startTime = Date.now()
const loadedFile = require('fs').readFileSync('./chains.txt', 'utf-8')
let totalRows = loadedFile.split('\n').length
const linkMap = []
loadedFile.split('\n').forEach((row) => {
  linkMap.push(...row.split('').map((x, i) => {
    if (x === '#') {
      return `${((i + 1) < 10) ? ('0' + (i + 1)) : (i + 1)}${(totalRows < 10) ? ('0' + totalRows) : totalRows}`
    }
  }).filter(n => n))
  totalRows--
})
let middles = 0
let ends = 0
let singles = 0
linkMap.forEach((linkPosition) => {
  let xPos = linkPosition[0] + linkPosition[1]
  let yPos = linkPosition[2] + linkPosition[3]
  let surrounding = [
    `${xPos}${(parseInt(yPos) -1) < 10 ? ('0' + (parseInt(yPos) -1)) : parseInt(yPos) -1}`,
    `${xPos}${(parseInt(yPos) +1) < 10 ? ('0' + (parseInt(yPos) +1)) : parseInt(yPos) +1}`,
    `${(parseInt(xPos) -1) < 10 ? ('0' + (parseInt(xPos) -1)) : parseInt(xPos) -1}${yPos}`,
    `${(parseInt(xPos) +1) < 10 ? ('0' + (parseInt(xPos) +1)) : parseInt(xPos) +1}${yPos}`
  ]
  let count = 0
  surrounding.forEach((surround) => {
    if (linkMap.includes(surround)) {
      count++
    }
  })
  switch (count) {
    case 0:
      singles++
      break;
    case 1:
      ends++
      break;
    case 2:
      middles++
      break;
  }
})
// console.log('Singles: ', singles)
// console.log('Middles: ', middles)
// console.log('Ends: ', ends)

console.log('Total Chains: ', ends / 2)
console.log('Total Links: ', linkMap.length)

console.log('Time: ', Date.now() - startTime)