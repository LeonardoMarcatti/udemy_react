import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const ResultModal = forwardRef((props, ref) => {
   const {targetTime, remainingTime, onReset} = props
   const dialog = useRef()
   const userLost = remainingTime <= 0
   
   useImperativeHandle(ref, () => {
       return {
         open() {
            dialog.current.showModal()
         }
      }
   })

   return createPortal(
      <dialog className="result-modal" ref={dialog} onClose={onReset}>
         {
            userLost && <h2>You lost :(</h2>
         }
         
         <p>The target tima was <strong>{targetTime} second(s)</strong></p>
         <h2>
            {
               ((100/remainingTime * 100).toFixed(2) != 'Infinity') ? (100/remainingTime * 100).toFixed(2) : ''
            }
         </h2>
         <form method="dialog" onSubmit={onReset}>
            <button type="submit">Close</button>
         </form>
      </dialog>,
      document.querySelector('#modal')
   )
})

export default ResultModal