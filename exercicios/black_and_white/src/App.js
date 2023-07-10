import React, {useState, useCallback} from 'react';
import styles from './App.module.css';
import Button from './components/Button.tsx';

function App() {
  console.log('App')
  const [mode, setMode] = useState(true);
  const handleMode = useCallback(() => setMode(prevState => !prevState), [])

  return (
    <div id="body" className={`${styles.body} ${mode ? styles.black : styles.white}`}>
      <h2>Black n' White</h2>
      <Button onClick={handleMode} txt={mode? 'White Mode' : "Black Mode"} className={mode? 'btn-danger' : 'btn-success'}/>
    </div>
  );
}

export default App;