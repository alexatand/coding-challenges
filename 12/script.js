const rows = {
  1: '',
  2: '',
  3: ''
}
const numberPattern = {
  1: ['   ', '  |', '  |'],
  2: [' _ ', ' _|', '|_ '],
  3: [' _ ', ' _|', ' _|'],
  4: ['   ', '|_|', '  |'],
  5: [' _ ', '|_ ', ' _|'],
  6: [' _ ', '|_ ', '|_|'],
  7: [' _ ', '  |', '  |'],
  8: [' _ ', '|_|', '|_|'],
  9: [' _ ', '|_|', ' _|'],
  0: [' _ ', '| |', '|_|'],
}

process.argv[2].split('').forEach(number => {
  rows[1] += numberPattern[number][0]
  rows[2] += numberPattern[number][1]
  rows[3] += numberPattern[number][2]
})

console.log(rows[1])
console.log(rows[2])
console.log(rows[3])