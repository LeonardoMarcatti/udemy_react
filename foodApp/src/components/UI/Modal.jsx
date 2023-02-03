import React from "react";
import ReactDOM from "react-dom";
import style from './Modal.module.css'

const Backdrop = () => <div className={style.backdrop}></div>

const ModalOverlay = props => {
  const {children} = props
  return (
    <div className={style.modal}>
      <div>
        {children}
      </div>
    </div>
  )
}

const Modal = props => {
  const {children} = props
  return (
    <>
    {ReactDOM.createPortal(<Backdrop/>, document.querySelector('#overlays'))}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.querySelector('#overlays'))}
    </>
  )
}

export default Modal;