import React, {memo} from "react";
import CoreConcept from "./CoreConcept";

const Concept = memo(function Concept({data}){
   return <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
            data.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)
            }
          </ul>
        </section>
})

export default Concept