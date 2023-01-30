import React from "react";
import style from './Input.module.css';

const Input = props => {
  const {input, label} = props
  return (
    <div className={style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  ) 
}

export default Input;