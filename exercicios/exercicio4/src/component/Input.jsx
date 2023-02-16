import React from "react";

const Input = props => {
  const {type, name, id, className, value, blur, change} = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={className}
      value={value}
      onChange={change}
      onBlur={blur}
    />
  )
}

export default Input;