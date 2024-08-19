import React, {memo} from "react";

const CoreConcept = memo(function CoreConcept({title, description, image}) {
   return <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
   </li>
})

export default CoreConcept