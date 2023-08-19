import React from 'react';
import Button from './components/Button';
import Input from './components/Input'
import useCounter from './hooks/useCounter';
import styles from './components/Button.module.css'

function App() {
  console.log('app');
  const {value, changeValue} = useCounter()
  return (
    <>
      <Input type="number" name="number" id="number" val={value}/>
      <br />
      <Button buttonName="Plus" style={`${styles.button} ${styles.plus}`} onClick={() => changeValue(true)} />
      <Button buttonName="Minus" style={`${styles.button} ${styles.minus}`} onClick={() => changeValue(false)} />
    </>
  );
}

export default App;
