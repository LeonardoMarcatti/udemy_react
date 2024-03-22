import React from "react";

const Input = (props) => {
   const {label, id, type, name, onChange, value, onBlur, onFocus, error} = props

   return (
      <div className="control no-margin">
          <label htmlFor="email">{label}</label>
          <input id={id} type={type} name={name} onChange={onChange} value={value} onBlur={() => onBlur(id)} onFocus={() => onFocus(id)} />
          <div className="control-error">
          {
            error && <small>{error}</small>
          }
          </div>
        </div>
   )
}

export default Input