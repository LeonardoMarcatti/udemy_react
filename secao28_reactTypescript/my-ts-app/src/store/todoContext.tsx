import {useState, createContext} from "react";
import {Todo, ctx, Props} from "../models/todo";

// Cria o molde do contexto
export const TodoContext = createContext<ctx>({
  items: [],
  addToDoHandler: (txt: string) => {},
  deleteToDo: (id: number) => {},
})

// Função que fornece o contexto a aplicação
const TodoContextProvider = (props: Props) => {
  const {children} = props
  const [todos, setToDoList] = useState<Todo[]>([{id: Math.random(), txt: 'ReactJS'}, {id: Math.random(), txt: 'TypeScript'}])

  const addToDoHandler = (txt: string) => {
    const newTodo = {id: Math.random(), txt}
    setToDoList([...todos, newTodo])
  }

  const deleteToDo = (id: number) => {
    const updatedToDos = todos.filter(el => el.id !== id)
    setToDoList(updatedToDos);
  }

  // Fornece o valor padrão/inicial do contexto
  const ctxValue: ctx = {
    items: todos,
    addToDoHandler: addToDoHandler,
    deleteToDo: deleteToDo
  }

  return <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
}

export default TodoContextProvider;