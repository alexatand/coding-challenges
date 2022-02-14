async function potusCensus(filePath) {
  let data = require('fs').readFileSync(filePath, 'utf-8').split('\n').map(x => x.split(','))
  const presidents = data.slice(1, data.length).map((president) => {
    return {
      name: president[0],
      born: president[1] ? new Date(president[1]).getFullYear() : null,
      died: president[3] ? new Date(president[3]).getFullYear() : null,
    }
  }).filter(x => x.name)
  let yearMap = {}
  for (let i = presidents[0].born; i <= new Date().getFullYear(); i++) {
    yearMap[i] = presidents.filter(president => {
      return president.born <= i && (!president.died || president.died >= i)
    }).length
  }
  const maxAlive = Math.max(...Object.values(yearMap))
  const years = Object.keys(yearMap).filter(year => yearMap[year] === maxAlive)
  console.log(`In the year(s): ${years}, ${maxAlive} presidents were all alive`)
}

potusCensus('./data.csv')