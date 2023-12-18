import { useState, useRef } from "react";

const Player = (props) => {
  const playerNameRef = useRef(null)
  const [playerName, setPlayerName] = useState(null)

  const handleClick = (p) => {
    setPlayerName(playerNameRef.current.value)
    playerNameRef.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity'}  </h2>
      <p>
        <input type="text" id="name" ref={playerNameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

 export default Player