import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
   const {reset, calc} = props
   return (
      <form className="form" onSubmit={calc}>
        <div className="input-group">
          <Input id="current-savings" type="number" label="Current Savings (R$)"/>
          <Input id="yearly-contribution" type="number" label="Yearly Savings ($)"/>
        </div>
        <div className="input-group">
          <Input id="expected-return" type="number" label="Expected Interest (%, per year)"/>
          <Input id="duration" type="number" label="Investment Duration (years)"/>
        </div>
        <p className="actions">
          <Button type="reset" className="buttonAlt" txt="Reset" onClick={reset}/>
          <Button type="submit" className="button" txt="Calculate" />
        </p>
      </form>
   )
}

export default Form