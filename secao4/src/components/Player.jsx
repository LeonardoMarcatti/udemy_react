import React from "react";
import { useState } from "react";

const Player = (props) => {
   const {name, symbol} = props
   const [isEditing, setEditing] = useState(false)
   const [playerName, setPlayerName] = useState('')

   const editName = () => setEditing( prevState => !prevState)
   return <li>
            <span className="player">
               {
                  !isEditing ? <span className="player-name">{name}</span> : <input type="text" name="playerName" id="playerName" /> 
               }
            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={editName}>{isEditing? 'Save' : 'Edit'}</button>
         </li>
}

export default Player

