import React, {useState} from "react";
import Button from "./UI/Button";

const btnClass = 'px-6 py-2 rounded-md text-gray-100 font-bold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 hover:text-stone-100'

const NewTask = (props) => {
   const {onAddTask} = props
   const [task, setTask] = useState('')

   const handleChange = (e) =>{
      e.target.value.trim() != '' && setTask(e.target.value)
      
   }

   const handleClick = () => {
      if (task.trim() != '') {
         onAddTask(task)
      }
      setTask('')
   }

   return <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={task} />
      <Button className={btnClass} onClick={handleClick}>Add</Button>
   </div>
}

export default NewTask