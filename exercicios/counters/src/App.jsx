import React from 'react';
import Button from './components/Button';
import Input from './components/Input'
import useCounter from './hooks/useCounter';
import styles from './components/Button.module.css'
import Text from './components/Text';

function App() {
  const {value, addValue, delValue, amountPlus, amountRemove} = useCounter()
  return (
    <>
      <Input type="number" name="number" id="number" val={value}/>
      <br />
      <Button buttonName="Plus" style={`${styles.button} ${styles.plus}`} onClick={addValue} />
      <Button buttonName="Minus" style={`${styles.button} ${styles.minus}`} onClick={delValue} />
      <Button buttonName="Add 5" style={`${styles.button} ${styles.del5}`} onClick={amountPlus} />
      <Button buttonName="Del 5" style={`${styles.button} ${styles.add5}`} onClick={amountRemove} />
      <Text/>
    </>
  );
}

export default App;
