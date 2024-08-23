import React, {memo, useState} from "react";

const Player = memo(function Player({name, symbol, isActive}) {
   const [state, setState] = useState({playerName: name, editing: false})
   const editHandling = () => {
      setState(prevState => {
         const newState = {...prevState}
         newState.editing = !prevState.editing
         return newState
      })
   }
   const handleName = (p) => {
      setState(prevState => {
         const newState = {...prevState}
         newState.playerName = p.target.value
         return newState
      })
   }
   
   return <li className={isActive ? 'active' : undefined}>
            <span className="player">
                  {
                     state.editing ? <input type="text" name="playerName" id="playerName" value={state.playerName} onChange={handleName} /> : <span className="player-name">{state.playerName}</span>
                  }
                  <span className="player-synbol"> {symbol} </span>
               </span>
               <button type="button" onClick={editHandling}>{state.editing? 'Save' : 'Edit'}</button>
            </li>
});

export default Player