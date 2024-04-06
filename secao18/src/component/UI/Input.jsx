import React from "react";

const Input = (props) => {
   const {label, id, ...rest} = props

   return (
      <p className="control">
         <label htmlFor={id}>{label}</label>
         <input id={id} name={id} {...rest} required/>
      </p>
   )
}

export default Input