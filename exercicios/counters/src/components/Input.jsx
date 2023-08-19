import React from "react";

const Input = p => {
  console.log('input');
  const {type, name, id, val} = p 
  return (
    <input type={type} name={name} id={id} value={val} readOnly/>
  )
}

export default Input;