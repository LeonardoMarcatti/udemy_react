import React, {useState, useEffect, useReducer, useRef} from 'react';
import Input from './component/Input';
import Label from './component/Label';
import Button from './component/Button';
import Radio from './component/Radio';
import DataLabel from './context/dataLabel';
import TextArea from './component/TextArea';
import styles from './App.module.css';

function App() {
  const [isValid, setValid] = useState(false)
  const [sex, setSex] = useState(null)
  const msg = useRef();

  const nameReducer = (state, action) => {
    const {type, val} = action;
    if (type === 'user_input') {
      const validName = val.length > 0
      return {value: val, valid: validName};
    }
  
    if (type === 'input_blur') {
      const validName = state.value.length > 0
      return {value: state.value, valid: validName};
    }

    return {value: state, isValid: false};
  }

  const [nameState, dispatchName] = useReducer(nameReducer, {value: '', isValid: null});

  const handleName = e => {
    const{value} = e.target;
    dispatchName({type: 'user_input', val: value});
  }

  const validateName = e => {
    dispatchName({type: 'input_blur'});
  }

  const emailReducer = (state, action) => {
    const {type, val} = action;
    if (type === 'user_input') {
      let validEmail = false;
      if (val.includes('@') && val.includes('.com')) {
        validEmail = true;
      }
      return {value: val, valid: validEmail}
    }

    if (type === 'input_blur') {
      let validEmail = false;
      if (state.value.includes('@') && state.value.includes('.com')) {
        validEmail = true;
      }
      return {value: state.value, valid: validEmail}
    }

    return {value: state, valid: false};
  }

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});

  const handleEmail = e => {
    const{value} = e.target;
    dispatchEmail({type: 'user_input', val: value});
  }

  const validateEmail = e => {
    dispatchEmail({type: 'input_blur'});
  }

  const passReducer = (state, action) => {
    const {type, val} = action;
    const length = 3;
    let validPass = false;
    if (type === 'user_input') {
      if (val.length >= length) {
        validPass = true;
        
      }
      return {value: val, valid: validPass}
    }

    if (type === 'input_blur') {
      let validPass = false;
      if (state.value.length >= length) {
        validPass = true;
      }
      return {value: state.value, valid: validPass}
    }

    return {value: state, valid: false};
  }

  const [passState, dispatchPass] = useReducer(passReducer, {value: '', isValid: null});

  const handlePass = e => {
    const{value} = e.target;
    dispatchPass({type: 'user_input', val: value});
  }

  const validatePass = e => {
    dispatchPass({type: 'input_blur'});
  }

  const passReducer2 = (state, action) => {
    const {type, val} = action;
    const length = 3;
    let validPass = false;
    if (type === 'user_input') {
      if (val.length >= length) {
        validPass = true;
        
      }
      return {value: val, valid: validPass}
    }

    if (type === 'input_blur') {
      let validPass = false;
      if (state.value.length >= length) {
        validPass = true;
      }
      return {value: state.value, valid: validPass}
    }

    return {value: state, valid: false};
  }

  const [passState2, dispatchPass2] = useReducer(passReducer2, {value: '', isValid: null});

  const handlePass2 = e => {
    const{value} = e.target;
    dispatchPass2({type: 'user_input', val: value});
  }

  const validatePass2 = e => {
    dispatchPass2({type: 'input_blur'});
  }

  const handleSex = e => {
    const{value} = e.target
    setSex(value)
  }

  useEffect(() => {
    if (nameState.valid && emailState.valid && sex && passState.valid && passState2.valid && passState.value === passState2.value) {
      setValid(true)
    } else{
      setValid(false)
    }
  }, [nameState.valid, emailState.valid, passState.valid, passState2.valid, sex, passState.value, passState2.value])

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Nome: ${nameState.value} Sex: ${sex} Email: ${emailState.value} Senha: ${passState.value} Mensagem: ${msg.current.value}`);
  }

  const clearFields = () => {
    dispatchName({type: 'user_input', val: ''});
    dispatchEmail({type: 'user_input', val: ''});
    dispatchPass({type: 'user_input', val: ''});
    dispatchPass2({type: 'user_input', val: ''});
    setSex(null);
  }

  return (
    <div className={styles.App}>
      <h3>Preencha o formulário abaixo</h3>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"fullName", txt: "Nome Completo:", className: "form-label"}}>
            <Label/>
          </DataLabel.Provider>
          <Input type="text" name="fullName" id="fullName" className="form-control" value={nameState.value} change={handleName} blur={validateName} />
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor: 'masculino', txt: 'Masculino', className: 'form-label'}}>
            <Radio myid="masculino" value="m" chk={sex === 'm'} onChange={handleSex}/>
          </DataLabel.Provider>
          <DataLabel.Provider value={{htmlFor: 'feminino', txt: 'Feminino', className: 'form-label'}}>
            <Radio myid="feminino" value="f" chk={sex === 'f'} onChange={handleSex}/>
          </DataLabel.Provider>
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"email", txt: "Email:", className: "form-label"}}>
            <Label />
          </DataLabel.Provider>
          <Input type="email" name="email" id="email" className="form-control" value={emailState.value} change={handleEmail} blur={validateEmail} />
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"password", txt: "Senha:", className: "form-label"}}>
            <Label />
          </DataLabel.Provider>  
          <Input type="password" name="password" id="password" className="form-control" value={passState.value} change={handlePass} blur={validatePass} />
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"password2", txt: "Repita senha:", className: "form-label"}}>
            <Label />
          </DataLabel.Provider> 
          <Input type="password" name="password2" id="password2" className="form-control" value={passState2.value} change={handlePass2} blur={validatePass2}/>
        </div>
        <div className='mb-3'>
          <DataLabel.Provider value={{htmlFor:"message", txt: "Mensagem:", className: "form-label"}}>
            <Label />
          </DataLabel.Provider>
          <TextArea ref={msg}/>
        </div>
        <div className='mb-3'>
          <Button type="submit" txt="Cadastrar" id="submit" className="btn btn-success" status={!isValid}/>
          <Button type="reset" txt="Limpar" id="clear" className="btn btn-danger" onClick={clearFields}/>
        </div>
      </form>
    </div>
  );
}

export default App;
