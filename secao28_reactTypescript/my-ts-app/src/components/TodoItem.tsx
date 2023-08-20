import styles from './TodoItem.module.css'
interface Todo {
  children: string,
  onDeleteToDo : () => void
}

const TodoItem = (props: Todo) => {
  const {children, onDeleteToDo} = props
  
  return (
    <li className={`${styles.item}`} onClick={onDeleteToDo}>{children}</li>
  )
}

export default TodoItem;