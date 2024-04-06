import React from 'react'

const GameOver = (props) => {
   const {winner, onRestart} = props
   return <div id='game-over'>
      <h2>!!!GAME OVER!!!</h2>
      {
         winner &&<p>{winner} won!</p>
      }
      {
         !winner && <p>It is a draw!</p>
      }

      <button type="button" onClick={onRestart}>Rematch!</button>
   </div>
}

export default GameOver