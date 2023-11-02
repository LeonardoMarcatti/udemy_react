import Header from "./components/Header";
import CoreConcept from './components/CoreConcept';
import TabButton from "./components/TabButton.jsx";
import {useState} from "react";
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";

const  App = () => {
  const [state, setState] = useState(null)
  const handleSelect = (p) => {
    setState(EXAMPLES[p])
  }
  let filteredElement = ''
  if (state !==  null) {
    filteredElement = CORE_CONCEPTS.filter(el => el.title == state.title)
    console.log(filteredElement);
    console.log(state);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {
             (filteredElement == '') ?  CORE_CONCEPTS.map(el => <CoreConcept image={el.image} title={el.title} description={el.description}/>) : filteredElement.map(el => <CoreConcept image={el.image} title={el.title} description={el.description}/>)
             
            }
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
