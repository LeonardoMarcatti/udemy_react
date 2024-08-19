import React, {useState} from "react";
import CoreConcept from "./CoreConcept";
import CORE_CONCEPTS from "../data";
import styles from './Main.module.css'
import TabButton from "./TabButton";


const Main = () => {
   const [selectedTopic, setSelectedTopic] = useState('Choose an button')
   const handleClick = (selectedButton) =>  setSelectedTopic(selectedButton)
   
   return (
      <main>
         <section id={styles['core-concepts']}>
            <h2>Core Concepts</h2>
            <ul>
            {
               CORE_CONCEPTS.map((el, i) => <CoreConcept {...el} key={i}/>)
            }
            </ul>
         </section>
         <section id={styles['examples']}>
            <h2>Examples</h2>
            <menu>
            {
               CORE_CONCEPTS.map(el => <TabButton key={el.title} onHandleClick={() => handleClick(el)} title={el.title} isSelected={selectedTopic.title == el.title}/>)
            }
            </menu>
            
            <div id="tab_content">
            {
               (typeof selectedTopic == 'string') ? <p>{selectedTopic}</p> : <>
                  <h3>{selectedTopic.title}</h3>
                  <p>{selectedTopic.description}</p>
               </>
            }
            </div>
         </section>
      </main>
   )
}

export default Main