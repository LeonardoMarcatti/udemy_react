import React from "react";
import styles from './card.module.css';

class Card extends React.Component{
  render(){
    const {children, className} = this.props;
    return (
      <div className={`${styles.card} ${className}`}>{children}</div>
    )
  }
}

export default Card;