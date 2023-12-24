import React from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";

export default function Login() {
  const {inputValues, handleSubmit, handleBlur, handleFocus, handleInputChange, resetData, invalidEmail, invalidPassword} = useInput()
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="email" id="email" type="email" name="email" onChange={handleInputChange} value={inputValues.email} onBlur={handleBlur} onFocus={handleFocus} error={invalidEmail && 'Check your email address'}/>
        
        <Input label="password" id="password" type="password" name="password" onChange={handleInputChange} value={inputValues.password} onBlur={handleBlur} onFocus={handleFocus} error={invalidPassword && 'Please check your password'}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset" onClick={resetData}>Reset</button>
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
