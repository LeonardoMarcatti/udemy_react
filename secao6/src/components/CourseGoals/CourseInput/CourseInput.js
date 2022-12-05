import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = event => {
    const {value} = event.target;
    setEnteredValue(value);
    if (value.trim().length > 0) {
      setValid(true);
    }
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      return setValid(false);
    }
    props.onAddGoal(enteredValue);
    setValid(true);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !valid ? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} style={{boxShadow: !valid ? '0 0 10px red' : 'none'}}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
