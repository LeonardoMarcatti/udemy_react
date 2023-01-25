import React from "react";

const Button = props => {
  const {type, txt, className, status, id, onClick} = props;
  return (
    <button
      type={type}
      className={className}
      disabled={status}
      id={id}
      onClick={onClick}
    >
      {txt}
    </button>
  )
}

export default Button;