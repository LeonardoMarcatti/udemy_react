import React, {useState, useEffect} from 'react';

const Timer = (props) => {
   const {timeout, onTimeout, mode} = props
   const [remainingTime, setRemainingTime] = useState(timeout)

   useEffect(() => {
      const timer = setTimeout(onTimeout, timeout);
      return () => clearTimeout(timer)
   }, [timeout, onTimeout])

   useEffect(() => {
      const interval = setInterval(() => {
         setRemainingTime(prevState => prevState - 10)
      }, 10);
      return () => clearTimeout(interval)
   }, [])
   
   

   return <progress max={timeout} value={remainingTime} className={mode}/>
}

export default Timer