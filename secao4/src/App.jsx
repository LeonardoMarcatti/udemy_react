import React, {useState} from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from './winning'

const deriveActivePlayer = (gameTurns) => {
   let currentPlayer = 'X'
   if(gameTurns.length > 0 && gameTurns[0].player == 'X') {
      currentPlayer = 'O'
   }
   return currentPlayer
}

const initialGame = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
]

const App = () => {
   const [gameTurns, setGameTurns] = useState([])
   const currentPlayer = deriveActivePlayer(gameTurns)

   let winner = null;
   let gameBoard = initialGame
   for (const turn of gameTurns) {
      const {square, player} = turn
      const {row, col} = square
      gameBoard[row][col] = player
   }


   for (const combination of WINNING_COMBINATIONS) {
      const firstSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSymbol = gameBoard[combination[2].row][combination[2].column]

      if (firstSymbol && firstSymbol === secondSymbol && firstSymbol == thirdSymbol) {
         winner = firstSymbol
      }
   }
   const handleChangePlayer = (rowIndex, colIndex) => {
      setGameTurns(prevState => {
         const currentPlayer = deriveActivePlayer(prevState)
         const newTurns = [{square:{row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevState]
         return newTurns
      })
   }

   return (
      <main>
         <div id="game-container">
            <ol id="players" className="highlight-player">
               <Player  name="Player 1" symbol="X" isActive={currentPlayer === 'X'} />
               <Player  name="Player 2" symbol="O" isActive={currentPlayer === 'O'} />
            </ol>
            {
               winner && <h1 id="message">You won! {winner}</h1>
            }
         <GameBoard onSelectedSquare={handleChangePlayer} board={gameBoard}/>
         </div>
         <Log turns={gameTurns}/>
      </main>
   )
}

export default App
