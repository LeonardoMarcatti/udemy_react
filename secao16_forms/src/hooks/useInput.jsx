import {useRef, useState, useEffect} from "react";

const useInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [validName, setValidName] = useState(null)
  const [validEmail, setValidEmail] = useState(null)
  const [validForm, setValidForm] = useState(false)
  const [sent, setSent] = useState(false)
  const refName = useRef('')
  const refEmail = useRef('')

  const handleBlur = p => {
    const {name} = p.target
    if (name === 'name' && refName.current.value.trim() === '') {
      setValidName(false)
    } 
    if (name === 'email' && refEmail.current.value.trim() === '') {
      setValidEmail(false)
    }
  }

  const handleFocus = p => {
    const {name} = p.target
    if (name === 'name') {
      setValidName(null)
    } else {
      setValidEmail(null)
    }
  }

  const checkEmail = p => {
    if (p.includes('@') && p.includes('.com')) {
      return true
    }
    return false
  }

  const handleChange = p => {
    const {name} = p.target
    if (name === 'name') {
      if (refName.current.value.trim() !== '') {
        setValidName(true)
        setName(refName.current.value)
      } else {
        setValidName(false)
        setName('')
      }
    } else {
      if (refEmail.current.value.trim() !== '' && checkEmail(refEmail.current.value)) {
        setValidEmail(true)
        setEmail(refEmail.current.value)
      } else {
        setValidEmail(false)
        setEmail('')
      }
    }    
  }

  useEffect(() => {
    if (validName && validEmail) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }, [validName, validEmail])

  const submitHandler = e => {
    e.preventDefault()
    setSent(true)
  }

  const resetFields = () => {
    setName('')
    setEmail('')
    setValidEmail(null)
    setValidName(null)
    setValidForm(false)
    setSent(false)
  }

  return {name, email, validName, validEmail, validForm, sent, refName, refEmail, handleBlur, handleChange, handleFocus, submitHandler, resetFields}
}

export default useInput;