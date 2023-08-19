import React from "react"
import TodoItem from "./TodoItem"
import styles from './Todos.module.css'
/**
 * ! O type abaixo nos diz como devem ser as props
 * ! Elas devem ter um array chamado items e um className tipo string
 */
interface Todo {
  items: {id: number, txt: string}[],
}

const Todos = (props: Todo) => {
    const {items} = props
  return (
      <ul className={`${styles.todos}`}>
        {items.map(el => <TodoItem key={el.id}>{el.txt}</TodoItem>)}
      </ul>
  )
}

export default Todos;