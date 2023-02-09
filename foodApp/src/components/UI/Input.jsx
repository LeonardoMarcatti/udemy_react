import React from "react";
import style from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const {input, label} = props
  return (
    <div className={style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  ) 
})

export default Input;