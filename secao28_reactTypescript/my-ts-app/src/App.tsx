import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

const todos: Todo[] = [{id: Math.random(), txt: 'JavaScript'}, {id: Math.random(), txt: 'TypeScript'}]

function App() {
  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
