import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const [showP, setShowP] = useState(false)

  const handleClick = useCallback (() => setShowP(prevState => !prevState),[])

  return (
    <div className="app">
      <h1>Hi there!</h1>      
      <Button onClick={handleClick}>Toggle Paragraph</Button>
      <Paragraph show={showP} />
    </div>
  );
}

export default App;
