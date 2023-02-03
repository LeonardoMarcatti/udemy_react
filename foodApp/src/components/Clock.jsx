import React from "react";

const Clock = props => {
  const {onSetClock, onClock} = props
  setInterval(() => onSetClock(new Date().toLocaleTimeString()), 1000)
  return (
    <h2>{onClock}</h2>
  )
}

export default Clock;