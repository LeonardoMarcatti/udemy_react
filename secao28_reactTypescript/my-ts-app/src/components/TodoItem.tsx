import React from "react"
import styles from './TodoItem.module.css'
interface Todo {
  children: string
}


const TodoItem = (props: Todo) => {
  const {children} = props
  
  return (
    <li className={`${styles.item}`}>{children}</li>
  )
}

export default TodoItem;