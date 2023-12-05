import { useState } from 'react';
import Button from './Button';
import Input from './Input';


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
          <Input
            type="email"
            label="Email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />

          <Input
            invalid={passwordNotValid}
            type="password"
            label="Password"
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
       
      </div>
      <div className="flex flex-row gap-4 justify-between">
        <button type="button" className="text-white">
          Create a new account
        </button>
        <Button onClick={handleLogin}/>
      </div>
    </div>
  );
}
