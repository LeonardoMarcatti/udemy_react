import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button');
  const {onClick, children, type} = props
  return (
    <button
      type={type || 'button'}
      className={`${classes.button}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
