import TodoItem from "./TodoItem"
/**
 * ! O type abaixo nos diz como devem ser as props
 * ! Elas devem ter um array chamado items e um className tipo string
 */
interface Todo {
  items: {id: number, txt: string}[],
  className: string
}

const Todos = (props: Todo) => {
    const {items} = props
  return (
      <ul>
        {/* {items.map(el => <li key={el.id} className={props.className}>{el.txt}</li>)} */}
        {items.map(el => <TodoItem key={el.id} className={props.className}>{el.txt}</TodoItem>)}
      </ul>
  )
}

export default Todos;