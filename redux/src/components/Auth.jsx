import classes from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../store/newStore'
import { useRef } from 'react';
import  Input  from './UI/Input';
const Auth = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isAuthenticated)
  const handleLogin = () => dispatch(login({email: emailRef.current.value , password: passwordRef.current.value}))
  const emailRef = useRef()
  const passwordRef = useRef()
  return (
          !auth && (
          <main className={classes.auth}>
          <section>
            <form onSubmit={handleLogin}>
              <Input className={classes.control} label="Email" type='email' id='email' ref={emailRef}/>
              <Input className={classes.control} label="Password" type='password' id='password' ref={passwordRef}/>
            <button>Login</button>
            </form>
          </section>
          </main>
        )
      )
};

export default Auth;
