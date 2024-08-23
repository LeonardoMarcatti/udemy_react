import { WINNING_COMBINATIONS } from "./data"

const deriveActivePlayer = gameTurns => {
   let currentPlayer = 'X'

   if (gameTurns.length > 0 && gameTurns[0].player == 'X') {
      currentPlayer = 'O'
   }
   return currentPlayer
}

const deriveWinner = (gameBoard) => {
   let winner = null;

   for (const combination of WINNING_COMBINATIONS) {
      const firstSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSymbol = gameBoard[combination[2].row][combination[2].column]

      if (firstSymbol && firstSymbol == secondSymbol && firstSymbol == thirdSymbol) {
         winner = firstSymbol
      }
   }

   return winner
}

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]

const deriveGameBoard = (gameTurns) => {
   let gameBoard = [...initialGameBoard.map(array => [...array])]

   for (const turn of gameTurns) {
      const {square, player} = turn
      const {row, col} = square
      gameBoard[row][col] = player
   }

   return gameBoard
}

export {deriveActivePlayer, deriveWinner, deriveGameBoard}