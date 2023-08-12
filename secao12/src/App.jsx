// import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import Paragraph from './components/Paragraph';
import './App.css';
import useClick from './hooks/useClick';

function App() {
  const {showP, handleClick} = useClick()
  console.log('App');

  return (
    <div className="app">
      <h1>Hi there!</h1>      
      <Button onClick={handleClick}>Toggle Paragraph</Button>
      {
        showP && <Paragraph />
      }
      
    </div>
  );
}

export default App;
