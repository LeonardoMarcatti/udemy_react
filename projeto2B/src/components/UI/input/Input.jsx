import React, {useRef, useImperativeHandle} from "react";
import style from './input.module.css';

const Input = React.forwardRef(({isValid, type, id, value, onChange, onBlur, label}, ref) => {
  const inputRef = useRef();

  const active = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: active
    }
  })

  return (
    <div
      className={`${style.control} ${
        isValid === false ? style.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
})

export default Input;