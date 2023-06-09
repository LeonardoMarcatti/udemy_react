import classes from './checkout.module.css'
import useForm from '../hooks/useForm';

const Checkout = props => {
const {handleChange, handleBlur, handleFocus, validForm, handleEmailChange, handleEmailBlur, handleEmailFocus, handleSex, sex, handleAgeChange, handleAgeFocus, handleAgeBlur, handleColorChange, handleColorFocus, handleColorBlur, nameState, emailState, ageState, colorState} = useForm()
const {onSubmit, onClick} = props

const confirmHandler = p => {
  p.preventDefault()
  onSubmit({name: nameState.value, email: emailState.value, age: ageState.value, color: colorState.value})
}


  return (
    <form action="" method="post" onSubmit={confirmHandler} className={classes.form}>
      <div className={`${classes.control} ${!nameState.isValid && classes.invalid}`}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
        {
          nameState.isValid === false && <small>Insert name</small>
        }
      </div>
      <div className={classes.sex}>
        <div>
          <input type="radio" name="sex" id="m" checked={sex === 'm'}  onChange={handleSex}/>
          <label htmlFor="m">Male</label>
        </div>
        <div>
          <input type="radio" name="sex" id="f" checked={sex === 'f'} onChange={handleSex}/>
          <label htmlFor="f">Female</label>
        </div> 
      </div>
      <div className={`${classes.control} ${!emailState.isValid && classes.invalid}`}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onFocus={handleEmailFocus} onBlur={handleEmailBlur} onChange={handleEmailChange}/>
        {
          emailState.isValid === false && <small>Insert email</small>
        }
      </div>
      <div className={`${classes.control} ${!ageState.isValid && classes.invalid}`}>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" min="0" step="1" placeholder='0' onFocus={handleAgeFocus} onBlur={handleAgeBlur} onChange={handleAgeChange} />
        {
          ageState.isValid === false && <small>Insert age</small>
        }
      </div>
      <div className={`${classes.control} ${!colorState.isValid && classes.invalid}`}>
        <label htmlFor="color">Select:</label>
        <select name="color" id="color" onFocus={handleColorFocus} onBlur={handleColorBlur} onChange={handleColorChange} >
          <option value="0" defaultValue={0}>Seletc color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        {
          colorState.isValid === false && <small>Selec color</small>
        }
      </div>
      <div className={classes.actions}>
        <button type="submit" className={ validForm ? `${classes.btn_order} ${classes.btn}` : `${classes.disabled} ${classes.btn}`} disabled={!validForm}>Order</button>
        <button type="reset" onClick={onClick} className={`${classes.btn} ${classes.btn_cancel}`}>Cancel</button>
      </div>
    </form>
  )
}

export default Checkout