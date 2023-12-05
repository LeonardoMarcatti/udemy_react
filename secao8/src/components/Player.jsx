import { useState, useRef } from "react";

export default function Player() {
  const nameRef = useRef('')
  const [playerName, setPlayerName] = useState(null)

  const handleClick = (e) => {
    if (nameRef.current.value != '') {
      setPlayerName(nameRef.current.value)
      nameRef.current.value = ''
    } else {
      setPlayerName(null)
    }
  }

  return (
    <section id="player">
      <h2>Welcome {(playerName) ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={nameRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
