import React from "react";
import style from './button.module.css';

class Button extends React.Component {
  render(){
    const {type, children} = this.props;
    return (
      <button className={style.button} type={type || 'button'}>{children}</button>
    ) 
  }
};

export default Button;