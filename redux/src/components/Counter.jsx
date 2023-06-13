import classes from './Counter.module.css';
import useCounter from '../hooks/useCounter';

const Counter = props => {
  const  {counter, increase, decrease, show, toggleShow, add, del} = useCounter()

  return (
    <main className={classes.counter}>
      <button onClick={toggleShow}>Toggle Counter</button>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && counter}</div>     
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={() => add(5) }>Add 5</button>
      <button onClick={() => del(5) }>Remove 5</button>
    </main>
  );
};

export default Counter;
