import React from "react";

const Log = (props) => {
   const {turns} = props
   return <ol id="log">
      {
         turns.map((turn, i) => {
            return <li key={`${turn.square.row}-${turn.square.row}-${i}`}>{`${turn.player} selected ${turn.square.row}-${turn.square.col}`}</li>
         })
      }
   </ol>
}

export default Log