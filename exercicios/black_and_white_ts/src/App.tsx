import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<boolean>(true)
  const toggleMode = () => {
    setMode(prevState => !prevState)
  }
  return (
    <div className={`body ${mode? 'black' : 'white'}`}>
      <h1>
        { `${mode? 'Modo Escuro' : 'Modo Claro'}` }
      </h1>
      <Button txt="Toggle Mode" onClick={toggleMode} className={`btn ${mode ? 'btn-danger' : 'btn-success'}`}/>
    </div>
  );
}

export default App;
