import React from 'react';
import Button from './Button';
import style from './error.module.css';
import Card from './Card';

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

export default ModalOverlay;