import React, {useState} from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver"
import {deriveActivePlayer, deriveWinner, deriveGameBoard} from "./helpers"

const App = () => {
   const [gameTurns, setGameTurns] = useState([])
   const currentPlayer = deriveActivePlayer(gameTurns)

   const handleActivePlayer = (rowIndex, colIndex) => {
      setGameTurns(prevState => {
         const currentPlayer = deriveActivePlayer(prevState)
         const newState = [{square: { row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevState]
         return newState
      })
   }

   const handleRestartGame = () => setGameTurns([])
   const gameBoard = deriveGameBoard(gameTurns)
   const winner = deriveWinner(gameBoard)
   const draw = gameTurns.length == 9 && !winner


   return <main>
      <div id="game-container">
         <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" isActive={currentPlayer == 'X'} />
            <Player name="Player 2" symbol="O" isActive={currentPlayer == 'O'} />
         </ol>
         {
            (winner || draw) && <GameOver winner={winner} onHandleRestartGame={handleRestartGame}/>
         }
         <GameBoard onHandleActivePlayer={handleActivePlayer} board={gameBoard}></GameBoard>
      </div>
  </main>
}

export default App
