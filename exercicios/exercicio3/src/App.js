import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import Total from './components/Total';
import styles from './App.module.css';

const App = props => {
  const [number, setNumber] = useState(0);
  const [statusMin, setStatusMin] = useState(true);
  const [statusMax, setStatusMax] = useState(false);
  const [isHuman, setHuman] = useState(false);

  const handleClick = e => {
    const {innerText} = e.target;

    if (innerText === '-') {
      setNumber((prevState) => Number(prevState) - 1 )
    } else {
      setNumber((prevState) => Number(prevState) + 1 )
    }
  }

  const handleCheck = () => setHuman((prevState) => !prevState);

  useEffect(() => {
    if (number === 0) {
      setStatusMin(true)
      setStatusMax(false)
    }

    if(number === 10) {
      setStatusMin(false)
      setStatusMax(true)
    }

    if (number >= 1 && number <= 9) {
      setStatusMin(false)
      setStatusMax(false)
    }
  }, [number]);

  return (
    <div className={`${styles.app}`}>
      <Total value={number} className={`${styles.total}`}/>
      <div className={`${styles.buttons}`}>
        <Button type="button" value="-" className="btn btn-danger" onClick={handleClick} status={statusMin}/>
        <Button type="button" value="+" className="btn btn-success" onClick={handleClick} status={statusMax}/>
      </div>
      <h3>Are you human?</h3>
      <label htmlFor="chk"><input 
        type="checkbox"
        checked={isHuman}
        onChange={handleCheck}
        name="chk"
        id="chk"
      /> Sim/Não</label>
      <h1>
        {
          isHuman ? 'Sim' : 'Não'
        }
      </h1>
    </div>
  )
}

export default App;