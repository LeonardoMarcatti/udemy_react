import React from "react";
import NewTask from "./NewTask";
import Button from "./UI/Button";
const Task = (props) => {
   const {onAddTask, onDeleteTask, tasks, id} = props
   const filteredTaks = tasks.filter(el => el.projectID == id)
   return <section>
      <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
      {
         filteredTaks.length == 0 && <p className="text-stone-700 mb-6">This project doesn't have tasks</p>
      }
      
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {
         filteredTaks.length > 0 &&
         <ul className="p-4 mt-8 rounded bg-stone-200">
         {
            
            filteredTaks.map(el => {
               return (
                  <li key={el.id} className="flex justify-between my-4">
                     <span>{el.text}</span>
                     <Button className=" py-1 px-3 rounded-md bg-red-400 text-white hover:bg-red-600" onClick={()=>onDeleteTask(el.id)}>X</Button>
                  </li>
               )}
            )
         }
         </ul>
      }
   </section>
}

export default Task