import React, {useContext} from "react";
import DataLabel from '../context/dataLabel';

const Label = props => {
  const ctx = useContext(DataLabel)
  return (
    <label
      htmlFor={ctx.htmlFor}
      className={ctx.labelClass}
    >
      {ctx.txt}
    </label>
  )
}

export default Label;