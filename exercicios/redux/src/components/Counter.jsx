import React, {useRef} from "react";
import useCounter from "../hooks/useCounter";
import useShow from "../hooks/useShow";
import styles from './Counter.module.css'

const Counter = () => {
  const {counter, increase, decrease, add, del, checkMin, addValue, delValue} = useCounter()
  const {show, toggleShow} = useShow()
  const numberRef = useRef()
  return (
    <>
    <label htmlFor="number">Add value</label>
    <input type="number" name="number" id="number" ref={numberRef} />
      <button type="button" onClick={toggleShow} className="btn btn-primary">Show/Hide</button>
      <h1>{show && counter}</h1>
      <div>
        <button type="button" onClick={increase} className={`${styles.button} btn btn-success`}>+</button>
        <button type="button" onClick={decrease} disabled={checkMin()} className={`${styles.button} btn ${checkMin() ? 'btn-disabled' : 'btn-danger'}`}>-</button>
        <button type="button" onClick={() => add(5)} className={`${styles.button} btn btn-warning`}>Add 5</button>
        <button type="button" onClick={() => del(5)} disabled={checkMin()} className={`${styles.button} btn ${checkMin() ? 'btn-disabled' : 'btn-warning'}`}>Remove 5</button>
        <button type="button" onClick={() => addValue(+numberRef.current.value)} className={`${styles.button} btn btn-success`}>Add Value</button>
        <button type="button" disabled={checkMin()} onClick={() => delValue(+numberRef.current.value)} className={`${styles.button} btn btn-success`}>Del Value</button>
      </div>
    </>
  )
}

export default Counter;