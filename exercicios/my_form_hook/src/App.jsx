import './App.css';
import {useForm} from 'react-hook-form'

const App = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: 'onChange'});
  const onSubmit = data => console.log(data);
  console.log(watch('name')); //Mostra em tempo real o que é digitado

  return (
    <div className="App">
      <header className="App-header">
        <h2>Formulário</h2>
        <form action="" method="post" className='col-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Seu nome:</label>
            <input type="text" name="name" id='name' className='form-control' {...register('name', {required: true})}/>
            <span><small>{errors.name && 'Esse campo é obrigatório'}</small></span>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Seu email:</label>
            <input type="email" name="email" id="email" className='form-control' {...register('email', {required: true})}/>
            <span><small>{errors.email && 'Esse campo é obrigatório'}</small></span>
          </div>
          <div className="mb-3">
            <button type="reset" className='btn btn-danger'>Apagar</button>
            <button type="submit" className='btn btn-success'disabled={!isValid} >Enviar</button>
          </div>
        </form>
      </header>      
    </div>
  );
}

export default App;
