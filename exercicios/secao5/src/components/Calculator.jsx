import React, {memo} from "react";

const Calculator = memo(function Calculator({onChange}) {
   return (
      <div id="user-input">
         <div className="input-group">
            <div>
               <label htmlFor="initialInvestment">Initial Investment</label>
               <input type="number" name="initialInvestment" id="initialInvestment" onChange={onChange} min="0" placeholder="0" />
            </div>
            <div>
               <label htmlFor="annualInvestment">Annual Investment</label>
               <input type="number" name="annualInvestment" id="annualInvestment" onChange={onChange} min="0" placeholder="0" />
            </div>
         </div>
         <div className="input-group">
            <div>
               <label htmlFor="expectedReturn">Expected Return</label>
               <input type="number" name="expectedReturn" id="expectedReturn" onChange={onChange} min="0" placeholder="0"/>
            </div>
            <div>
               <label htmlFor="duration">Duration</label>
               <input type="number" name="duration" id="duration" onChange={onChange} min="0" placeholder="0" />
            </div>
         </div>
      </div>
   )
})

export default Calculator