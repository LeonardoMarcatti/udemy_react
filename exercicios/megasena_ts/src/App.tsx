import Button from './components/Button'
import Numbers from './components/Numbers';
import { useAppDispatch} from './store/hook'
import useNumber from './hooks/useNumbers';
import styles from'./App.module.css';

function App() {
  const {start, erase} = useNumber()
  const dispatch = useAppDispatch()
  const go = () => dispatch(start)
  const clean = () => dispatch(erase)
  return (
    <div className={`${styles.body}`}>
      <header className={`${styles.header}`}>
        <h1>MEGA-SENA</h1>
      </header>
      <div className={`${styles.Appheader}`}>
        <div>
          <Numbers />
          <div>
            <Button className="btn btn-success" onClick={go} txt="Sortear"/>
            <Button className="btn btn-danger" onClick={clean} txt="Limpar"/>
          </div>
        </div>
      </div>
    <footer>
      <small>Feito por Leonardo Marcatti</small>
    </footer>
    </div>
    
  );
}

export default App;
