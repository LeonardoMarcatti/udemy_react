import React from "react";

const Paragraph = props => {
  const {show} = props
  console.log('Paragraph');
  return(
  <>
      {show ? <p>New paragraph component</p> : null}
  </>
  )
}

export default React.memo(Paragraph);