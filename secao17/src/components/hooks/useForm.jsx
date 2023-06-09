import {useReducer, useEffect, useState} from "react";

const useForm = () => {
  const [errors, setErrors] = useState({nameError: null, sexError: null, emailError: null, ageError: null, colorError: null})
  const [sex, setSex] = useState(null)
  const [validForm, setValidForm] = useState(false)

  const nameReducer = (state, action) => {
    const {value, type} = action

    if (type === 'focus') {
      return{value, isValid: state.value.trim() !== ''}
    }

    if (type === 'change') {
      return {value, isValid: value.trim() !== ''}
    }

    if (type === 'blur') {
      setErrors({...errors, nameError: state.value.trim() === ''})
      return{value, isValid: state.value.trim() !== ''}
    }
  }

  const [nameState, dispatchName] = useReducer(nameReducer, {value: '', isValid: null})

  const handleChange = p => {
    const {value} = p.target
    dispatchName({value, type: 'change'})
  }

  const handleBlur = p => {
    const {value} = p.target
    dispatchName({type: 'blur', value})
  }

  const handleFocus = p =>  {
    const {value} = p.target
    dispatchName({type: 'focus', value})
  }

  const handleSex = p => {
    const {id} = p.target
    setSex(id)
    setErrors({...errors, sexError: false})
  }

  const emailValidity = p => p.includes('@') && p.includes('.com')

  const emailReducer = (state, action) => {
    const {type, value} = action

    switch (type) {
      case 'change':
        setErrors({...errors, emailError: value.trim() === ''})
        return{value, isValid: emailValidity(value.trim())}        

      case 'focus':
        setErrors({...errors, emailError: value.trim() === ''})
        return{value, isValid: emailValidity(value.trim())}        

      default:
        setErrors({...errors, emailError: state.value.trim() === ''})
        return{value, isValid: emailValidity(state.value.trim())}        
    }
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})

  const handleEmailChange = p => {
    const {value} = p.target
    dispatchEmail({value, type: 'change'})
  }

  const handleEmailBlur = p => {
    const {value} = p.target
    dispatchEmail({type: 'blur', value})
  }

  const handleEmailFocus = p =>  {
    const {value} = p.target
    dispatchEmail({type: 'focus', value})
  }

  const ageReducer = (state, action) => {
    const {type, value} = action

    switch (type) {
      case 'focus':
        setErrors({...errors, ageError: value === ''})
        return({value, isValid: value !== ''})
              
      case 'change':
        setErrors({...errors, ageError: value > 0})
        return({value, isValid: value > 0})        

      default:
        setErrors({...errors, ageError: value === ''})
        return({value, isValid: state.value !== '' && value > 0})        
    }
  }

  const [ageState, dispatchAge] = useReducer(ageReducer, {value: 0, isValid: null})

  const handleAgeChange = p => {
    const {value} = p.target
    dispatchAge({value, type: 'change'})
  }

  const handleAgeFocus = p => {
    const {value} = p.target
    dispatchAge({value, type: 'focus'})
  }

  const handleAgeBlur = p => {
    const {value} = p.target
    dispatchAge({value, type: 'blur'})
  }

  const colorReducer = (state, action) => {
    const {type, value} = action

    switch (type) {
      case 'focus':
        setErrors({...errors, colorError: value === '0'})
        return {value, isValid: value !== '0'}
      
      case 'change':
        setErrors({...errors, colorError: value === '0'})
        return {value, isValid: value !== '0'}
      default:
        setErrors({...errors, colorError: state.value === '0'})
        return {value, isValid: state.value !== '0'}
    }
  }

  const [colorState, dispatchColor] = useReducer(colorReducer, {value: '', isValid: null})

  const handleColorFocus = p => {
    const {value} = p.target
    dispatchColor({value, type: 'focus'})
  }

  const handleColorChange = p => {
    const {value} = p.target
    dispatchColor({value, type: 'change'})
  }

  const handleColorBlur = p => {
    const {value} = p.target
    dispatchColor({value, type: 'blur'})
  }

    useEffect(() => {
      setValidForm(nameState.isValid && emailState.isValid && sex !== null && ageState.isValid && colorState.isValid)
    }, [nameState.isValid, emailState.isValid, sex, ageState.isValid, colorState.isValid])


  return {handleChange, handleBlur, handleFocus, errors, validForm, handleEmailChange, handleEmailBlur, handleEmailFocus, handleSex, sex, handleAgeChange, handleAgeFocus, handleAgeBlur, handleColorChange, handleColorFocus, handleColorBlur, nameState, emailState, ageState, colorState}
}

export default useForm