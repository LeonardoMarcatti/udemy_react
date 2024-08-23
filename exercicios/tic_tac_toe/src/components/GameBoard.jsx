import React, {memo} from "react";

const GameBoard = memo(function GameBoard({onHandleActivePlayer, board}) {
   return <ol id="game-board">
      {
         board.map((row,  rowIndex) => <li key={rowIndex}>
            <ol>
               {
                  row.map((symbol, colIndex) => <li key={colIndex}>
                     <button type="button" onClick={() => onHandleActivePlayer(rowIndex, colIndex)} disabled={symbol != null}>{symbol}</button>
                  </li> )
               }
            </ol>
         </li>)
      }
   </ol>
});

export default GameBoard