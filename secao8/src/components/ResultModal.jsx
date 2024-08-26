import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(({targetTime, remainingTime, onReset}, ref) => {
   const dialog = useRef()
   const userLost = remainingTime <= 0
   const formattedTime = (remainingTime/1000).toFixed(2)
   const score = Math.round((1 - remainingTime/(targetTime*1000)) * 100)

   
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
         <p>The target time was <strong>{targetTime} second{targetTime > 1 && 's'}</strong></p>  
         {
            !userLost && <><h2>Your socre is: </h2> <h2>{score}</h2></> 
         } 
         <p>You stopped the timer with <strong>{formattedTime}</strong> seconds left</p>
         <form method="dialog" onSubmit={onReset}>
            <button type="submit">Close</button>
         </form>
      </dialog>,
      document.querySelector('#modal')
   )
})

export default ResultModal