import classes from './Counter.module.css';
import {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0)

  const toggleCounterHandler = () => setValue(prevState => prevState + 1) ;

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{value}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
