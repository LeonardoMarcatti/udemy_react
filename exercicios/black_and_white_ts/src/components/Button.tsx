import React from "react";

interface Props {
   txt: string
   className: string
   onClick: () => void
}

const Button = (props: Props) => {
   const {txt, className, onClick} = props

   return <button type="button" className={`btn ${className}`} onClick={onClick}>{txt}</button>
}

export default Button