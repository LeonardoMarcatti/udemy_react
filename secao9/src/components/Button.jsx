import React from "react";

const Button = (props) => {
   const {type, className, txt, onClick} = props

   return <button type={type} className={className} onClick={onClick}>{txt}</button>
}

export default Button