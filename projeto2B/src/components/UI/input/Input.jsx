import React from "react";
import style from './input.module.css';

const Input = props => {

  const {isValid, type, id, value, onChange, onBlur, label} = props;

  return (
    <div
      className={`${style.control} ${
        isValid === false ? style.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default Input;