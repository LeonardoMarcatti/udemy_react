import React, {memo} from "react";
import Tasks from "./Tasks";

const SelectedProject = memo(function SelectedProject({project, onDelete, onDeleteTask, onAddTask, tasks}) {
   const {title, date, description, id} = project
   const formattedDate = new Date(date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
   
   return <div className="w-[35rem] mt-16">
            <div className="border-b-2 border-stone-300">
               <header className="mb-4">
               <div className="flex flex-row items-center justify-between">
                  <h1 className="text-3xl font-bold text-stone-600">{title}</h1>
                  <button type="button" className="px-8 py-4 rounded-lg bg-red-500 text-stone-900 hover:text-stone-100 hover:bg-red-700" onClick={onDelete}>Delete</button>
               </div>
               </header>
               <p className="mb-4 text-stone-400">{formattedDate}</p>
               <p className="mb-4 text-stone-600 whitespace-pre-wrap">{description}</p>
            </div>
            <h2 className="text-3xl text-stone-700 font-bold">Tasks</h2>
               <Tasks projectID={id} onDeleteTask={onDeleteTask} onAddTask={onAddTask} tasks={tasks}/>
         </div>
})

export default SelectedProject