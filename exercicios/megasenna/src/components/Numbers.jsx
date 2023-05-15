import React from "react";

const Numbers = props => {
  const {numbers} = props;
  return (
    <>
      <h3>Os números sorteados são:</h3>
      <p>{numbers.toString()}</p>
    </>
  )
}

export default React.memo(Numbers);