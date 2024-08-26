import React, { useState, useRef, memo } from "react";

const Player = memo(function Player() {
  const playerNameRef = useRef('')
  const [playerName, setPlayerName] = useState(null)

  const handleClick = () => {
      setPlayerName(playerNameRef.current.value)
      playerNameRef.current.value = ''
  }


  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}  </h2>
      <p>
        <input type="text" id="name" ref={playerNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
})

 export default Player