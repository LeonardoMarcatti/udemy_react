import React, {useState, useRef, memo} from "react";
import ResultModal from "./ResultModal";

const Timer = memo(function Timer({title, targetTime}) {
   const timer = useRef(null)
   const modalRef = useRef()
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
   let activeTimer = timeRemaining > 0 && timeRemaining < targetTime * 1000

   const handleStart = () => {
      timer.current = setInterval(() => {
         setTimeRemaining(prevState => prevState - 10)
      }, 10);
   }

   const handleStop = () => {
      clearInterval(timer.current)
      modalRef.current.open()
   }

   const reset = () => {
      setTimeRemaining(targetTime * 1000)
   }

   if (timeRemaining <= 0) {
      clearInterval(timer.current)
      modalRef.current.open()
   }

   return (
      <>
         <ResultModal remainingTime={timeRemaining} ref={modalRef} targetTime={targetTime} onReset={reset} />
         <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 && 's'} 
            </p>
            <button type="button" onClick={activeTimer? handleStop : handleStart}>{activeTimer ? 'Stop' : 'Start'}</button>
            <p className={activeTimer? 'active': '' }>
               {activeTimer? 'Time is running': '' }
            </p>
         </section>
      </>
   )
})

export default Timer