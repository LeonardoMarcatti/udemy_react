import React, {useState} from "react";

const Clock = props => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  setInterval(() => setClock(new Date().toLocaleTimeString()), 1000)
  return (
    <h2>{clock}</h2>
  )
}

export default Clock;