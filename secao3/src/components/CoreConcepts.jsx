import React from "react";
import CoreConcept from './CoreConcept';

const CoreConcepts = ({data}) => {
   return (
      <section id="core-concepts">
         <h2>Core concepts</h2>
         <ul>
            {
               data.map((el, i) => <CoreConcept key={i} image={el.image} title={el.title} description={el.description}/>)
            }
         </ul>
      </section>
   )
}

export  default CoreConcepts