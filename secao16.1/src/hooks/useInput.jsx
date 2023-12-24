import {useState} from "react"
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'

const useInput = () => {
   const [inputValues, setInputValues] = useState({email: '', password: ''})
   const [edit, setEdit] = useState({email: false, password: false})

   const invalidEmail = edit.email && isNotEmpty(inputValues.email) && !isEmail(inputValues.email)
   const invalidPassword = edit.password && isNotEmpty(inputValues.password) && !hasMinLength(inputValues.password, 6)

   const handleSubmit = (e) => {
      e.preventDefault()
      if (invalidEmail || inputValues.email == '' || inputValues.password == '') {
        return null
      }
      console.log(inputValues);
    }
  
    const handleBlur = (id) => {
      setEdit(prevState => {
       return {...prevState, [id]: true}
      })
    }
  
    const handleFocus = (id) => {
      setEdit(prevState => {
       return {...prevState, [id]: false}
      })
    }
  
    const handleInputChange = (e) => {
      const {value, name} = e.target
  
      setInputValues(prevState => {
        return {...prevState, [name]: value}
      })
    }
  
    const resetData = () => {
      setInputValues({email: '', password: ''})
    }

    return {inputValues, handleSubmit, handleBlur, handleFocus, handleInputChange, resetData, invalidEmail, invalidPassword}
}

export default useInput
