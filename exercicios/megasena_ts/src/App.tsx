import Button from './components/Button'
import Numbers from './components/Numbers';
import { useAppDispatch} from './store/hook'
import useNumber from './hooks/useNumbers';
import './App.css';

function App() {
  const {start} = useNumber()
  const dispatch = useAppDispatch()
  const go = () => dispatch(start)

  return (
    <div className="App-header">
      <Numbers />
      <Button className="btn btn-danger" onClick={go} txt="Sortear"/>
    </div>
  );
}

export default App;
