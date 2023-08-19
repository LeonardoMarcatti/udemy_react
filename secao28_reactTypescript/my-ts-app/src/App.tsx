import styles from '../src/App.module.css';
import Todos from './components/Todos';
import Todo from './models/todo';

// Abaixo o tipo de dado a ser enviado que segue o modelo do arquivo models\todo. 
const todos: Todo[] = [{id: Math.random(), txt: 'JavaScript'}, {id: Math.random(), txt: 'TypeScript'}]

function App() {
  return (
    <div>
      <Todos items={todos} className={`${styles.li}`}/>
    </div>
  );
}

export default App;
