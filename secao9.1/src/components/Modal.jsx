import React, {forwardRef, useImperativeHandle, useRef} from "react"
import {createPortal} from 'react-dom'
import Button from "./UI/Button"

const Modal = forwardRef((props, ref) => {
   const {children, btnText, onDelete, id} = props
   const dialog = useRef()
   let btnClass = "px-3 py-1 text-stone-100 rounded-md border-stone-300 "
   let bgModal = 'backdrop:bg-stone-900/90 p-4 rounded-xl'

   if (btnText == 'Yes') {
      btnClass += "bg-gradient-to-b from-red-400 to-red-600 hover:from-red-600 hover:to-red-800"
   } else {
      btnClass += "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800"
   }

   if(onDelete != undefined){
      bgModal += ' bg-red-900'
   }

   useImperativeHandle(ref, () => {
      return {
         open() {
            dialog.current.showModal()
         }
      }
     }
   )

   return createPortal(<dialog ref={dialog} className={bgModal}>
      {children}
      <form method="dialog" className="mt-4 text-right">
         <Button type="submit" className={btnClass} onClick={onDelete ? () => onDelete(id) : null}>{btnText}</Button>
      </form>
   </dialog>, document.querySelector('#modal-root'))
})

export default Modal;