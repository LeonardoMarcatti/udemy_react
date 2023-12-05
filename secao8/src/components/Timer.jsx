import React from "react";

const Timer = ({title, targetTime}) => {
   return (
      <section className="challenge">
         <h2>{title}</h2>
         <p className="challege-time">{targetTime} second{targetTime > 1 ? 's': ''}</p>
         <p>
            <button type="button">Click</button>
         </p>
         <p className="">Time is/not running</p>
      </section>
   )
}

export default Timer;