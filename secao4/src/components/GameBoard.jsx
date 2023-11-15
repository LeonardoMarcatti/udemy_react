import React from 'react'

export default function GameBoard (props){
   const {onSelectedSquare, board} = props  
   
   return (
   <ol id='game-board'>
      {
         board.map((row, rowIndex) => {
            return (
               <li key={rowIndex}>
                  <ol>
                     {
                        row.map((symbol ,colIndex) => {
                           return <li key={colIndex}>
                              <button type="button"
                                 onClick={() => onSelectedSquare(rowIndex, colIndex)}
                                 disabled={symbol != null}>
                                    {symbol}
                                 </button>
                           </li>
                        })
                     }
                  </ol>
               </li>
            )
         })
      }
   </ol>
   )
}