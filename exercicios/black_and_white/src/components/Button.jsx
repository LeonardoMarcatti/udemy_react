import React from "react";

const Button = props => {
  const {onClick, txt} = props;
  console.log('button');
  return (
    <button type="button" onClick={onClick} className="btn btn-success">{txt}</button>
  );
}

export default React.memo(Button);