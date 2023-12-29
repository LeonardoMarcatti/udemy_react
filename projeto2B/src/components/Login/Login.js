import React, { useState, useReducer, useEffect, useRef } from 'react'
import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/input/Input';

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)
  const emailRef =  useRef();
  const passwordRef = useRef();

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

  useEffect(() => {
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
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value)
    } else if(!emailIsValid) {
      emailRef.current.focus()
    } else {
      passwordRef.current.focus()
    }
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          id="email"
          label="Email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordRef}
          type="password"
          id="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
