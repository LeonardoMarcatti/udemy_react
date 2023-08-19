import React, {useRef} from "react"


const NewTodo = () => {
  // React.FormEvent é um tipo especial de dados interno do React
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const text = useRef<HTMLInputElement>(null);
  const enteredTXT  = text.current!.value;

  if (enteredTXT.trim().length === 0) {
    return false;
  }

 
  return (
    <form onSubmit={submitHandler} >
      <label htmlFor="todo">ToDo:</label>
      <input type="text" name="todo" id="todo" placeholder="Todo" ref={text} />
      <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewTodo