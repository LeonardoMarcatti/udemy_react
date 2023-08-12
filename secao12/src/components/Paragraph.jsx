import React from "react";

const Paragraph = props => {
  console.log('Paragraph');
  return(
    <p>New paragraph component</p>
  )
}

export default React.memo(Paragraph);