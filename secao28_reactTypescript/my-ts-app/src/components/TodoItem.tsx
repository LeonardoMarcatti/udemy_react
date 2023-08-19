
interface Todo {
  key: number,
  className: string,
  children: string
}

const TodoItem = (props: Todo) => {
  const {key, children, className} = props
  return (
    <li key={key} className={className}>{children}</li>
  )
}

export default TodoItem;