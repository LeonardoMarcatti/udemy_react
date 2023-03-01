import React from "react";

const Paragraph = props => {
  const {show} = props
  console.log('Paragraph');
  return(
  <>
      <p>{show ? 'New paragraph component' : ''}</p>
  </>
  )
}

export default React.memo(Paragraph);