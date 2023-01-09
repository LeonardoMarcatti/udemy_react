import React from "react";

const Button = props => {
  const {type, txt, className, status, id} = props;
  return (
    <button
      type={type}
      className={className}
      disabled={status}
      id={id}
    >
      {txt}
    </button>
  )
}

export default Button;