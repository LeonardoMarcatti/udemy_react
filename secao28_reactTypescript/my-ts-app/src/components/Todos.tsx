import TodoItem from "./TodoItem"
import styles from './Todos.module.css'
import {useContext} from "react"
import { TodoContext } from "../store/todoContext"

/**
 * ! O type abaixo nos diz como devem ser as props
 * ! Elas devem ter um array chamado items e um className tipo string
 */

const Todos = () => {
  const {items, deleteToDo } = useContext(TodoContext)
  return (
      <ul className={`${styles.todos}`}>
        { items.map(el => <TodoItem key={el.id} onDeleteToDo={() => deleteToDo(el.id)}>{el.txt}</TodoItem>)}
      </ul>
  )
}

export default Todos;