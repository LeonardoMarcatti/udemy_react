import React from "react";
import styles from './button.module.css';

const Button = props => {
  const {type, txt, className, status, id, onClick} = props;
  return (
    <button
      type={type}
      className={`${className} ${styles.button}`}
      disabled={status}
      id={id}
      onClick={onClick}
    >
      {txt}
    </button>
  )
}

export default React.memo(Button);