import React from "react";

const Button = props => {
  console.log('Botão')
  const {onClick, txt, className} = props;
  return (
    <button type="button" onClick={onClick} className={`btn ${className}`}>{txt}</button>
  );
}

export default React.memo(Button);