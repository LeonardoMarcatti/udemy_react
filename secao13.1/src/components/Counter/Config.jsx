import React, {useState} from "react";
import { log } from "../../log";

const Config = (props) => {
   const [enteredNumber, setEnteredNumber] = useState(0);
   const {onSet} = props
   log('<Config/>', 1)
   const handleChange = (event) => setEnteredNumber(+event.target.value)
 
   const handleSetClick = () => {
     onSet(enteredNumber);
     setEnteredNumber(0);
   }
   
   return (
      <section id="configure-counter">
         <h2>Set Counter</h2>
         <input type="number" onChange={handleChange} value={enteredNumber} />
         <button onClick={handleSetClick}>Set</button>
      </section>
   )
}

export default Config