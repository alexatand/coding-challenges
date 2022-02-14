function buildBoard() {
  const board = []
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  let rowIndex = 0
  let columnIndex = 1
  while (board.length < 100) {
    const boardPiece = {
      x: rows[rowIndex],
      y: columnIndex,
      state: 'unoccupied',
      hit: false
    }
    board.push(boardPiece)
    if (columnIndex === 10) {
      columnIndex = 1
      rowIndex++
    } else {
      columnIndex++
    }
  }
  return board
}

console.log('Alex')