import React from "react";

const TextArea = React.forwardRef((props, ref) => {
  return (
    <textarea className='form-control' ref={ref}></textarea>
  )
});

export default TextArea;