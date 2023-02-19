import './App.css';
import React, {useState} from 'react';
import Area from './components/Area';
import Button from './components/Button';

function App() {
  let [balls, setBalls] = useState([]);
  let [backupBalls, setBackup] = useState([]);

  const handleBall = e => {
    const {clientX, clientY} = e;
    setBalls((prevState) => [...prevState, {clientX, clientY}]);
  }

  const clearLast = () => {
    const length = balls.length;
    setBackup(prevState => [...prevState, balls[length-1]])
    
    const myArray = balls.filter((el, i) => i < length);
    myArray.pop();
    setBalls(myArray);
    return myArray;
  }

  const returnLast = () => {
    const last = (backupBalls.slice(-1).pop());
    if (backupBalls.slice(-1).pop()) {
      setBalls(prevState => [...prevState, last])
      backupBalls.pop()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <h1>Balões!</h1>
        <div>
          <Button className="btn btn-danger" value="Limpar Último" onClick={clearLast}/>
          <Button className="btn btn-success" value="Refazer" onClick={returnLast}/>
        </div>
      </header>
      <Area
        itens={balls}
        onAddBall={handleBall}
      />
    </div>
  );
}

export default App;
