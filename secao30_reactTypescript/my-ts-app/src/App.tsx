import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodoContextProvider from './store/todoContext';

// Abaixo o tipo de dado a ser enviado que segue o modelo do arquivo models\todo. 


function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
