import React from "react";
import useInput from "../hooks/useInput";

const SimpleInput = () => {
  const {name, email, validName, validEmail, validForm, sent, refName, refEmail, handleBlur, handleChange, handleFocus, submitHandler, resetFields} = useInput()
  
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' name="name" ref={refName} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} className={validName ? 'input_ok' : ''} disabled={sent} autoComplete="off" />
          <p>{validName === false && 'Enter a valid name'}</p>
          <p>{sent === true && name}</p>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' name="email" ref={refEmail} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} className={validEmail ? 'input_ok' : ''} disabled={sent} autoComplete="off" />
          <p>{validEmail === false && 'Enter a valid email'}</p>
          <p>{sent === true && email}</p>
      </div>
      <div className="form-actions">
        <button disabled={!validForm} >Submit</button>
        <button type="reset" onClick={resetFields} >Clear</button>
      </div>
    </form>
  );
};

export default SimpleInput;
