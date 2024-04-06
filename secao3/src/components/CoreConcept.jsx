import React from "react";

const CoreConcept = (props) => {
   const {image, title, description} = props
   return (
      <li>
         <img src={image} alt="" />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   )
}

export default CoreConcept