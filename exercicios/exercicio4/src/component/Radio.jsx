import React from "react";
import Label from "./Label";

const Radio = props => {
  const { myid, value, chk, onChange} = props;

  return (
    <div className="form-check form-check-inline">
      <input type="radio" name="sex" id={myid} value={value} onChange={onChange} checked={chk} className="form-check-input"/>
      <Label/>
    </div>
  );
}

export default Radio;