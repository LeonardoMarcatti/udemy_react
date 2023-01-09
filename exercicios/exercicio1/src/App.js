import './App.css';
import React, {useState} from 'react';
import Area from './components/Area';
import Button from './components/Button';

function App() {
  let [balls, setBalls] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleBall = e => {
    const {clientX, clientY} = e;
    setBalls((prevState) => [...prevState, {clientX, clientY}]);
  }

  const handleItens = () => {
    const length = balls.length;
    const myArray = balls.filter((el, i) => i < length);
    myArray.pop();
    return myArray;
  }

  const handleClick = () => {
    setClicked((prevState) => !prevState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>Balões!</h1>
        <div>
          <Button className="btn btn-danger" value="Limpar Último" onClick={handleClick} disabled={clicked}/>
          <Button className="btn btn-success" value="Refazer" onClick={handleClick} disabled={!clicked}/>
        </div>
      </header>
      <Area
        itens={(clicked)? handleItens() : balls}
        onAddBall={handleBall}
      />
    </div>
  );
}

export default App;
