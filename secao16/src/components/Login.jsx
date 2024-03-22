import React, {useRef, useState} from "react";

export default function Login() {
 const emailRef = useRef()
 const passwordRef = useRef()
 const [invalidEmailState, setInvalidEmailState] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const invalidEmail = emailRef.current.value.trim() != '' && (!emailRef.current.value.includes("@") || !emailRef.current.value.includes(".com"))
    setInvalidEmailState(invalidEmail)

    if (invalidEmail) {
      return null
    } 

    console.log('Sending HTTPS request');
  }

  const resetData = () => {
    emailRef.current.value = ''
    passwordRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} required/>
          <div className="control-error">
            <small>{invalidEmailState && 'Email is invalid'}</small>
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} required/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset" onClick={resetData}>Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
