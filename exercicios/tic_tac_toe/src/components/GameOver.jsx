import React, { memo } from "react";

const GameOver = memo(function GameOver({winner, onHandleRestartGame}) {
   return <div id="game-over">
      <h2>Game Over!</h2>
      {
         winner ? <p>{winner} won!</p> : <p>It's a Draw!</p>
      }
      
      <button type="button" onClick={onHandleRestartGame}>New Game</button>
   </div>
})

export default GameOver