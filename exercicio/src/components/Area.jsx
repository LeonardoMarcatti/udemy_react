import React from "react";
import Ball from './Ball'; 
import './area.css';

class Area extends React.Component {
  render(){
    const {itens, onAddBall} = this.props;
    return (
      <section onClick={onAddBall}>
        {
          itens.map((el, i) => <Ball key={i} style={{top: `${el.clientY - 75}px`, left: `${el.clientX - 25}px`}} />)
        }
      </section>
    )
  }
}

export default Area;