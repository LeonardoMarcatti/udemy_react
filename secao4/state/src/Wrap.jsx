import React from "react";
import './wrap.css';

class Wrap extends React.Component {
  render(){
    const {className,children} = this.props;
    const controls = `controls ${className}`;
    return (
      <div className={controls}>{children}</div>
    )
  }
}

export default Wrap;