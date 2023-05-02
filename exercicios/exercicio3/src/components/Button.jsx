import React from "react";

const Button = props => {
  const {type, value, onClick, className, status} = props;
  console.log('Button');
  return (
    <button type={type} className={className} onClick={onClick} disabled={status}>
      {value}
    </button>
  );
}

export default React.memo(Button);