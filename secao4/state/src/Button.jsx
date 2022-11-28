import React from "react";

class Button extends React.Component{
  render(){
    const {click, className, text} = this.props;
    const classes = `btn ${className}`;
    return(
      <button onClick={click} className={classes}>{text}</button>
    )
  }
}

export default Button;