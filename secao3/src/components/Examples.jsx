import React from "react";
import TabButton from "./TabButton";
import { useState } from "react";

const Examples = ({data}) => {
   const [state, setState] = useState(null)
   const handleSelect = (p) => {
      setState(data[p])
   }

   return (
      <section id="examples">
         <h2>Examples</h2>
          <menu>
            <TabButton isActive={(state != undefined && state.title == 'Components')? true : false}  onSelect={handleSelect} title="components" />
            <TabButton isActive={(state != undefined && state.title == 'JSX')? true : false} onSelect={handleSelect} title="jsx" />
            <TabButton isActive={(state != undefined && state.title == 'Props')? true : false}  onSelect={handleSelect} title="props" />
            <TabButton isActive={(state != undefined && state.title == 'State')? true : false}  onSelect={handleSelect} title="state" />
          </menu>
          {
            state ? (
              <div id="tab-content">
                <h3>{state.title}</h3>
                <p>{state.description}</p>
                <pre>
                  <code>{state.code}</code>
                </pre>
              </div>
            ) :  <p>Select a topic</p>
          }
      </section>
   )
}

export default Examples;