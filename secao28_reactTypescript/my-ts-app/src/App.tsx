import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

// Abaixo o tipo de dado a ser enviado que segue o modelo do arquivo models\todo. 
// const todos: Todo[] = [{id: Math.random(), txt: 'JavaScript'}, {id: Math.random(), txt: 'TypeScript'}]

function App() {
  const [todos, setToDoList] = useState<Todo[]>([{id: Math.random(), txt: 'JavaScript'}, {id: Math.random(), txt: 'TypeScript'}])

  const addToDoHandler = (txt: string) => {
    const newTodo = {id: Math.random(), txt}
    setToDoList([...todos, newTodo]) 
  }

  return (
    <div>
      <NewTodo onAddToDo={addToDoHandler} />
      <Todos items={todos}/>
    </div>
  );
}

export default App;
