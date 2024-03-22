import React, {useRef, useContext} from "react"
import { TodoContext } from "../store/todoContext"
import styles from './NewTodo.module.css'

const NewTodo = () => {
  const ctx = useContext(TodoContext);
  const text = useRef<HTMLInputElement>(null);

  // React.FormEvent é um tipo especial de dados interno do React
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()    
    const enteredTXT  = text.current!.value
    if (enteredTXT.trim().length === 0) {
      return;
    }

    ctx.addToDoHandler(enteredTXT)
    text.current!.value = ''
  }  

   return (
      <form onSubmit={submitHandler} className={`${styles.form}`}>
         <div className="mb-3">
            <label htmlFor="todo">ToDo:</label>
            <input type="text" name="todo" id="todo" placeholder="Add ToDo" ref={text}  className="form-control"/>
         </div>
         <button type="submit">Add ToDo</button>
    </form>
  )
}

export default NewTodo