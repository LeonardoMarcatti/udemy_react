import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Card";
import Button from './Button';
import style from './error.module.css';

class Backdrop extends React.Component{
  render(){
    return <div className={style.backdrop}/>
  }
}

class ModalOverlay extends React.Component{
  render(){
    const {title, message, onClearError} = this.props;
    return (
      <Card className={style.modal}>
          <header className={style.header}>
            <h2>{title}</h2>
          </header>
          <div className={style.content}>
            <p>{message}</p>
          </div>
          <footer className={style.actions}>
            <Button onClearError={onClearError}>OK</Button>
          </footer>
      </Card>
    )
  }
}

class ErrorModal extends React.Component{
  render(){
    const {title, message, onClearError} = this.props;
    return (
      <>
        {
          ReactDOM.createPortal(<Backdrop/>, document.querySelector('#backdrop-root'))
        }
        {
          ReactDOM.createPortal(<ModalOverlay title={title} message={message} onClearError={onClearError}/>, document.querySelector('#overlay-root'))
        }
      </>
    )
  }
}

export default ErrorModal;