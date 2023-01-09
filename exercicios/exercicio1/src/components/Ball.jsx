import React from "react";
import './ball.css';

class Ball extends React.Component {
  render(){
    const {style} = this.props;
    return (
      <div style={style} className="ball"></div>
    )
  }
}

export default Ball;