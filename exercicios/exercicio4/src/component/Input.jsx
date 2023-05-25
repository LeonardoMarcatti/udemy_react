import React, {useContext} from "react";
import Label from "./Label";
import DataLabel from "../context/dataLabel";

const Input = props => {
  const ctx = useContext(DataLabel)
  const {change, blur, val} = props
  return (
    <>
      <Label />
      <input
        type={ctx.type}
        id={ctx.id}
        name={ctx.name}
        className={ctx.className}
        value={val}
        onChange={change}
        onBlur={blur}
      />
    </>
  )
}

export default React.memo(Input);