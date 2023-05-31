import { useReducer, useEffect, useState } from "react";

const useForm = () => {
  const [validForm, setValidForm] = useState(false)
  const [error, setError] = useState({name: false, surName: false, email: false})

  const nameReducer = (state, action) => {
    const {type, value} = action
    if (type === 'change') {
      return {value, isValid: value.trim() !== ''}
    }

    if (type === 'focus') {
      setError({...error, name: false})
    }

    if (type === 'blur') {
      setError({...error, name: state.value.trim() === ''})
    }

    return {value: state.value, isValid: state.value.trim() !== ''}
  }

  const [nameState, dispatchName] = useReducer(nameReducer, {value: '', isValid: null})

  const changeName = p => {
    const {value} = p.target
    dispatchName({type: 'change', value})
  }

  const blurName = () => dispatchName({type: 'blur'})

  const focusName = () => dispatchName({type: 'focus'})

  const surNameReducer = (state, action) => {
    const {type, value} = action

    if (type === 'change') {
      return {value, isValid: value.trim() !== ''}
    }

    if (type ==='focus') {
      setError({...error, surName: false})
    }

    if (type === 'blur') {
      setError({...error, surName: state.value.trim() === ''})
    }

    return {value: state.value, isValid: state.value.trim() !== ''}
  }

  const [surNameState, dispatchSurName] = useReducer(surNameReducer, {value: '', isValid: null})

  const changeSurName = p => {
    const {value} = p.target
    dispatchSurName({type: 'change', value})
  }

  const blurSurName = () => dispatchSurName({type: 'blur'})

  const focusSurName = () => dispatchSurName({type: 'focus'})

  const checkEmail = p => p.trim() !== '' && p.includes('@') && p.includes('.com')

  const emailReducer = (state, action) => {
    const {type, value} = action

    if (type === 'change') {
      return {value, isValid: checkEmail(value)}
    }

    if (type === 'blur') {
      setError({...error, email: !checkEmail(state.value)})
    }

    if (type === 'focus') {
      setError({...error, email: false})
    }

    return {value: state.value, isValid: checkEmail(state.value)}
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})

  const changeEmail = p => {
    const {value} = p.target
    dispatchEmail({type: 'change', value})
  }

  const blurEmail = () => dispatchEmail({type: 'blur'})

  const focusEmail = () => dispatchEmail({type: 'focus'})

  useEffect(() => {
    setValidForm(nameState.isValid && surNameState.isValid && emailState.isValid)
  }, [nameState.isValid, surNameState.isValid, emailState.isValid])

  const handleSubmit = p => {
    p.preventDefault()
    alert(
      `
        Nome: ${nameState.value} ${surNameState.value}
        Email: ${emailState.value}
      `
    )
  }

  return {changeName, blurName, validForm, changeSurName, blurSurName, changeEmail, blurEmail, handleSubmit, error, focusName, focusSurName, focusEmail}
}

export default useForm;