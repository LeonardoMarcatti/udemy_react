import React from "react";
import { useState } from "react";

const Player = (props) => {
   const {name, symbol, isActive} = props
   const [isEditing, setEditing] = useState(false)
   const [playerName, setPlayerName] = useState(name)

   const editName = () => setEditing( prevState => !prevState)
   const saveName = (e) => setPlayerName(e.target.value)

   return <li className={isActive? 'active': ''}>
            <span className="player">
               {
                  !isEditing ? 
                  <span className="player-name">{playerName}</span> : <input type="text" name="playerName" id="playerName" value={playerName} onChange={saveName}/> 
               }
            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={editName}>{isEditing? 'Save' : 'Edit'}</button>
         </li>
}

export default Player

