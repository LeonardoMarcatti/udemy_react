import React from "react";
import Label from "./Label";

const TextArea = React.forwardRef((props, ref) => {
  return (
    <>
      <Label />
      <textarea className='form-control' ref={ref}></textarea>
    </>
  )
});

export default TextArea;