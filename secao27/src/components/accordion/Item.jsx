import React from "react";

const Item = ({title, children, className}) => {
   return <li className={className}>
      <h3>{title}</h3>
      <div>{children}</div>
   </li>
}

export default Item