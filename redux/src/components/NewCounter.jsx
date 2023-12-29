import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { useRef } from 'react';
import {add, del, toggle} from '../store/newStore'

const NewCounter = () => {
  const numberRef = useRef()
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.show)
  const addValue = () => dispatch(add(Number(numberRef.current.value)))
  const delValue = () => dispatch(del(Number(numberRef.current.value)))
  const toggleShow = () => dispatch(toggle())

  return (
    <div className={classes.counter}>
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
    </div>
  );
};

export default NewCounter;
