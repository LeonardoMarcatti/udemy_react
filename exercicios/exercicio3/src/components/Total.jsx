import React from "react";

const Total = props => {
  console.log('Total');
  const {value, className} = props;
  return (
    <div className={className}>
      <h1>{value}</h1>
    </div>
  );
};

export default React.memo(Total);