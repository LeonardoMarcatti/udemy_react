import React from "react";
import style from './button.module.css';

class Button extends React.Component {
  render(){
    const {type, children, onClearError} = this.props;
    return (
      <button className={style.button} type={type || 'button'} onClick={onClearError}>{children}</button>
    ) 
  }
};

export default Button;