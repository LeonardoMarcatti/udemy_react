import { useState } from 'react';
import Config from './components/Counter/Config.jsx';
import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

const App = () => {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (number) => setChosenCount(number)

  return (
    <>
      <Header />
      <main>
        <Config onSet={handleSetCount}/>
        <Counter initialCount={chosenCount} key={chosenCount}/>
      </main>
    </>
  );
}

export default App;
