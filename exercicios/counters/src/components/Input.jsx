import React, {memo} from "react";

const Input =  memo( (props) => {
  console.log('input');
  const {type, name, id, val} = props
  return (
    <input type={type} name={name} id={id} value={val} readOnly/>
  )
})

export default Input;