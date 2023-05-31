import useForm from "../hooks/useForm";

const BasicForm = props => {
  const {changeName, blurName, validForm, changeSurName, blurSurName, changeEmail, blurEmail, handleSubmit, error, focusName, focusSurName, focusEmail} = useForm()
  return (
    <form onSubmit={handleSubmit}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' name="name" onChange={changeName} onBlur={blurName} onFocus={focusName}/>
          {
            error.name && <small>Insert name</small>
          }             
        </div>
        <div className='form-control'>
          <label htmlFor='surName'>Last Name</label>
          <input type='text' id='surName' name="surName" onChange={changeSurName} onBlur={blurSurName} onFocus={focusSurName}/>
          {
            error.surName && <small>Insert last name</small>
          } 
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' name="email" onChange={changeEmail} onBlur={blurEmail} onFocus={focusEmail}/>
        {
          error.email && <small>Insert email</small>
        } 
      </div>
      <div className='form-actions'>
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
