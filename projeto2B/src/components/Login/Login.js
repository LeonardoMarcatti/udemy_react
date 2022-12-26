import React, { useState, useReducer, useEffect } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [emailIsValid, setEmailIsValid] = useState()
  // const [enteredPassword, setEnteredPassword] = useState('')
  // const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  const emailReducer = (state, action) => {
    const {type, val} = action
    if (type === 'user_input') {
      return {value: val, isValid: val.includes('@')}
    }
  
    if (type === 'input_blur') {
      return {value: state.value, isValid: state.value.includes('@')}
    }

    return {value: state, isValid: false}
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})

  const passwordReducer = (state, action) => {
    const {val, type} = action;
    if (type === 'user_input') {
      return {value: val, isValid: val.trim().length > 6}
    }

    if (type === 'input_blur') {
      return {value: state.value, isValid: state.value.trim().length > 6}
    }
    
    return {value: state, isValid: false}
  }

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() =>{
    setFormIsValid(emailIsValid && passwordIsValid)
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    const{value} = event.target
    dispatchEmail({type: 'user_input', val: value})
  }

  const passwordChangeHandler = (event) => {
    const{value} = event.target
    dispatchPassword({type: 'user_input', val: value});
  }

  const validateEmailHandler = () => {
    dispatchEmail({type: 'input_blur'})
  }

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'input_blur'})
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(emailState.value, passwordState.value)
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
