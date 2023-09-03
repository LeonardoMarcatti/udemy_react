import useNumber from './hooks/useNumbers';
import './App.css';
import Button from './components/Button';
import Numbers from './components/Numbers';

function App() {
  console.log('App');
  const {numbers, start} = useNumber();

  return (
    <div className="App">
      <Button className="btn btn-danger" onClick={start} />
      {
        numbers.length > 0 ? <Numbers numbers={numbers}/> : ''
      }
    </div>
  );
}

export default App;
