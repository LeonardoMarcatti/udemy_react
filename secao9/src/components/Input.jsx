import React from "react";

const Input = (props) => {
   const {label, type, id} = props

   return (
      <p>
         <label htmlFor={id}>{label}</label>
         <input type={type} id={id} />
      </p>
   )
}

export default Input