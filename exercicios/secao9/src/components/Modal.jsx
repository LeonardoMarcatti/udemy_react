import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const Modal = forwardRef(({children, error}, ref) => {
   const dialogRef = useRef()

   useImperativeHandle(ref, () => {
       return {
         open(){
             dialogRef.current.showModal()
         }
       }
     })

   return createPortal(<dialog className={`backdrop:bg-stone-900/90 py-4 w-1/5 text-white rounded-md ${error == true ? 'bg-red-500' : 'bg-lime-500'}`} ref={dialogRef}>
   {children}
      <form action="" method="dialog" className='text-center'>
         <button type="submit" className={`px-8 py-2 mt-4 ${error == true ? 'bg-red-600' : 'bg-lime-600'} text-white`}>OK</button>
      </form>
   </dialog>, document.querySelector('#modal'))
})

export default Modal