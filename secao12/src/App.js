import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const [showP, setShowP] = useState(false)

  const handleClick = useCallback(() => setShowP(prevState => !prevState), [])
  console.log('App');

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Paragraph show={showP} />
      <Button onClick={handleClick}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
