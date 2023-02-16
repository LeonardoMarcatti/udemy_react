import React from "react";
import ReactDOM  from "react-dom";
import ModalOverlay from './ModalOverlay';
import Backdrop from './Backdrop';

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