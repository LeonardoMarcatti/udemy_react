import React, {useState} from "react";
import {Todo, ctx, Props} from "../models/todo";

export const TodoContext = React.createContext<ctx>({
  items: [],
  addToDoHandler: (txt: string) => {},
  deleteToDo: (id: number) => {},
})

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

  const ctxValue: ctx = {
    items: todos,
    addToDoHandler: addToDoHandler,
    deleteToDo: deleteToDo
  }

  return <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
}

export default TodoContextProvider;