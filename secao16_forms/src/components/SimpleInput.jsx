import React, {useRef, useState} from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')
  const [validName, setValidName] = useState(null)
  const ref = useRef('')

  const handleName = e => {
    
    if (e.trim() === '') {
      setValidName(false)
    } else{
      alert(e)
      setName(e)
      setValidName(true)
    }
  }

  const handleBlur = () => {
    if (ref.current.value === '') {
      setValidName(false)
    }
  }

  const handleFocus = () => {
      setValidName(null)
  }

  const submitHandler = e => {
    e.preventDefault()
    handleName(ref.current.value)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={ref} onBlur={handleBlur} onFocus={handleFocus}/>
          <p>{validName === false && 'Enter a valid name'}</p>
          <p>{validName === true && name}</p>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
