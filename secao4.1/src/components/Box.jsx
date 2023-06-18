import React from "react";

const Box = props => {
  const {data: {title, image, description}, className, onClick, id} = props
  return (
      <li className={className} id={id}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={onClick}>Remove me</button>
      </li>
  )
}

export default Box;