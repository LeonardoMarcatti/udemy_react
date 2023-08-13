import styles from './App.module.css';
import Button from './components/Button.tsx';
import useToggle from './hook/useToggle';

function App() {
  console.log('App')
  const {state, changeState} = useToggle()
  // const [mode, setMode] = useState(true);
  // const handleMode = useCallback(() => setMode(prevState => !prevState), [])

  return (
    <div id="body" className={`${styles.body} ${state ? styles.black : styles.white}`}>
      <h2>Black n' White</h2>
      <Button onClick={changeState} txt={state? 'White Mode' : "Black Mode"} className={state? 'btn-danger' : 'btn-success'}/>
    </div>
  );
}

export default App;