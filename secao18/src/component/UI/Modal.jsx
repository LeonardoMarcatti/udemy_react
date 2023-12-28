import React, {useEffect, useRef} from "react";
import {createPortal} from 'react-dom'

const Modal = (props) => {
   const {children, open, className, onClose} = props
   const dialog = useRef()

   useEffect(() => {
      const modal = dialog.current
     if (open) {
      modal.showModal()
     }
      
     return () => modal.close()
   }, [open])
   
   return (
      createPortal(<dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>, document.querySelector('#modal'))
   )
}

export default Modal