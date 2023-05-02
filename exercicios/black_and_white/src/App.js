import React, {useState, useCallback} from 'react';
import styles from './App.module.css';
import Button from './components/Button';

function App() {
  const [mode, setMode] = useState(true);
  const handleMode = useCallback(() => setMode(prevState => !prevState), [])

  return (
    <div id="body" className={`${styles.body} ${mode ? styles.black : styles.white}`}>
      <h2>Black n' White</h2>
      <Button onClick={handleMode} txt={mode? 'White' : "Black"}/>
    </div>
  );
}

export default App;