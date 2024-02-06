import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { useRef } from 'react';

const Counter = () => {
  const numberRef = useRef()
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.show)
  const addValue = () => dispatch(add(numberRef.current.value))
  const delValue = () => dispatch({type: 'del', amount: numberRef.current.value})
  const toggleShow = () => dispatch()

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value}>{counter}</div>
      }
      <div id='insertValue'>
        <label htmlFor="number">Insert Value</label>
        <input type="number" name="number" id="number" ref={numberRef}/>
      </div>
      <button type='button' onClick={addValue}>Increase</button>
      <button type='button' onClick={delValue}>Decrease</button>
      <button type='button' onClick={toggleShow}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
