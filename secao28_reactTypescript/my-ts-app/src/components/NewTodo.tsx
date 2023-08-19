import React, {useRef} from "react"
import styles from './NewTodo.module.css'

interface Props {
  onAddToDo: (txt: string) => void
}

const NewTodo = (props: Props) => {
  const {onAddToDo} = props
  const text = useRef<HTMLInputElement>(null);

  // React.FormEvent é um tipo especial de dados interno do React
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()    
    const enteredTXT  = text.current!.value
    if (enteredTXT.trim().length === 0) {
      return;
    }

    onAddToDo(enteredTXT)
  }  

   return (
      <form onSubmit={submitHandler} className={`${styles.form}`}>
         <div className="mb-3">
            <label htmlFor="todo">ToDo:</label>
            <input type="text" name="todo" id="todo" placeholder="Todo" ref={text}  className="form-control"/>
         </div>
         <button type="submit" className="btn btn-outline-danger">Add ToDo</button>
    </form>
  )
}

export default NewTodo