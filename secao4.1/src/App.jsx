import { useState } from 'react';

import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import Main from './components/Main.jsx';

const App = () => {
   const [selectedTopic, setSelectedTopic] = useState();
   let tabContent = <p>Please select a topic.</p>;
   const handleSelect = selectedButton => setSelectedTopic(selectedButton)
   console.log('APP COMPONENT EXECUTING');


   if (selectedTopic) {
      tabContent = (
      <div id="tab-content">
         <h3>{EXAMPLES[selectedTopic].title}</h3>
         <p>{EXAMPLES[selectedTopic].description}</p>
         <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
         </pre>
      </div>
      );
   }

   return (
      <>
      <Header />
      <Main onHandleSelect={handleSelect} selectedTopic={selectedTopic} tabContent={tabContent} />
      </>
   );
}

export default App;
