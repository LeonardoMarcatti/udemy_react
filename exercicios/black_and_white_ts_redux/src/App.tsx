import Button from './components/Button';
import useToggle from './hooks/useToggle';
import './App.css';

function App() {
  const {mode, props} = useToggle()

  return (
    <div className={`body ${mode? 'black' : 'white'}`}>
        <Button txt={props.txt} className={props.className} />
    </div>
  );
}

export default App;
