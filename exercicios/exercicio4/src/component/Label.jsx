import React, {useContext} from "react";
import DataLabel from '../context/dataLabel';

const Label = props => {
  const ctx = useContext(DataLabel)
  return (
    <label
      htmlFor={ctx.htmlFor}
      className={ctx.className}
    >
      {ctx.txt}
    </label>
  )
}

export default Label;