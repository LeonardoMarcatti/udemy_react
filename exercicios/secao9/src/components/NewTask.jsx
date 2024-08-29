import React, {memo, useState} from "react"

const NewTask = memo(function NewTask({projectID, onAddTask}) {
   const classes = 'w-1/2 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
   const [task, setTask] = useState('')
   const handleChange = (e) => setTask(e.target.value)
   const handleAddTask = () => {
      if (task.trim() == '') {
         return null
      }
      onAddTask(task)
      setTask('')
   }

   return <div className="flex flex-row gap-4 items-center">
      <input type="text" name="task_title" id="task_title" className={classes} onChange={handleChange} value={task}/>
      <button type="button" value={task} onClick={handleAddTask}>Add Task</button>
   </div>
})

export default NewTask