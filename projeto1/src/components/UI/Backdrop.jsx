import React from "react";
import style from './error.module.css';

class Backdrop extends React.Component{
  render(){
    return <div className={style.backdrop}/>
  }
}

export default Backdrop;