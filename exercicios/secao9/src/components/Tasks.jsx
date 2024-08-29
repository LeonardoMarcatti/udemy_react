import React, {memo} from "react";
import NewTask from "./NewTask";

const Tasks = memo(function Tasks({projectID, onDeleteTask, onAddTask, tasks}) {
   return <section className="">
      <NewTask projectID={projectID} onAddTask={onAddTask}/>
   {
      tasks.length == 0 && <p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>
   }

   {
      tasks.length > 0 && <ul className="mt-8 p-2 rounded-md bg-stone-300 w-full">
      {
          tasks.map(el => <li key={el.taskID} className="bg-stone-200 my-2 flex flex-row justify-between items-center">{el.task}<button type="button" className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={() => onDeleteTask(el.taskID)}>X</button> </li>)
      }
      </ul>
   }
      
   </section>
})

export default Tasks