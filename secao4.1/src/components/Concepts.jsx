import React from "react";

const Concepts = props => {
  const {id} = props

  return (
    <ul id={id}>
      {
        props.children
      }
    </ul>
  )
}

export default Concepts;