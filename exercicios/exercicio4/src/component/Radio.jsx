import React from "react";
import Label from "./Label";

const Radio = props => {
  const {txt, myid, htmlFor, value, chk, onChange} = props;

  return (
    <div className="form-check form-check-inline">
      <input type="radio" name="sex" id={myid} value={value} onChange={onChange} checked={chk} className="form-check-input"/>
      <Label htmlFor={htmlFor} className="form-label" txt={txt}/>
    </div>
  );
}

export default Radio;