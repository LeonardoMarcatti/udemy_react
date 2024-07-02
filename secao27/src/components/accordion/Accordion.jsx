import React from "react";

const Accordion = ({children, className}) => {
   return <ul className={className}>
      {
        children
      }
   </ul>
}

export default Accordion