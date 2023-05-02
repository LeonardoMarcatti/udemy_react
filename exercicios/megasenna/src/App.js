import React, {useState, useCallback} from 'react';
import './App.css';
import Button from './components/Button';
import Numbers from './components/Numbers';

function App() {
  const [numbers, setNumbers] = useState([]);
  const addNumber = useCallback(() => {
    const allNumbers = []
    const sortNumber = () => Math.floor(Math.random() * 61)
    const checkNumber = (val) => {
      if (allNumbers.indexOf(val) !== -1) {
        return false
      }
      return true
    }

    const order = (a,b) => {
      return a-b;
    }

    for (let i = 0; i < 6; i++) {
      const sortedNumber = sortNumber()
      while (checkNumber(sortedNumber)) {
        allNumbers.push(sortedNumber)
      }
    }
    setNumbers(allNumbers.sort(order));
  }, [])

  return (
    <div className="App">
      <Button className="btn btn-danger" onClick={addNumber} />
      {
        numbers.length > 0 ? <Numbers numbers={numbers}/> : ''
      }
    </div>
  );
}

export default App;
