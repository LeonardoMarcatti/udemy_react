import React, {memo} from "react";
import TabButton from "./TabButton";
import { CORE_CONCEPTS } from "../data";

const Examples = memo(function Examples({onHandleSelect, selectedTopic, tabContent}){
   return <section id="examples">
               <h2>Examples</h2>
               <menu>
                  {
                     CORE_CONCEPTS.map((el, i) => <TabButton key={i} isSelected={selectedTopic === el.title} onSelect={() => onHandleSelect(el.title)} title={el.title}/>)
                  }
               </menu>
               {tabContent}
            </section>
})

export default Examples