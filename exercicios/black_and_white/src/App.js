import styles from './App.module.css';
import Button from './components/Button';
import { useSelector } from 'react-redux'

function App() {
  const status = useSelector(state => state.status)
  return (
    <div id="body" className={`${styles.body} ${status ? styles.black : styles.white}`}>
      <h2>Black n' White</h2>
      <Button />
    </div>
  );
}

export default App;