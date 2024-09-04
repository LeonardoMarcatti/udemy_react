import React, {memo, useState, useRef} from "react";
import Input from "./UI/Input";

const ProjectDetails = memo(function ProjectDetails({projects, projectID, onAddTask}) {
   const selectedProject = projects.find(el => el.id == projectID)   
   const [showInput, setShowInput] = useState(false)
   const taskRef = useRef('')
   const handleClick = () => setShowInput(prevState => !prevState)

   const handleAddTask = () => {
      onAddTask(taskRef.current.value)
      taskRef.current.value = ''
   }


   return <div className="w-full h-full">
         <h1 className="text-center text-slate-500 text-5xl">Project Detais</h1>
      <div className="mb-4">
         <h2 className="text-left text-slate-500 text-3xl">Title</h2>
         <h3 className="text-left text-slate-500 text-2xl indent-2">{selectedProject.title}</h3>
      </div>
      <div className="mb-4">
         <h2 className="text-left text-slate-500 text-3xl">DeadLine</h2>
      <h3 className="text-left text-slate-500 text-2xl indent-2">{selectedProject.date}</h3>
      </div>
      <div className="mb-4">
         <h2 className="text-left text-slate-500 text-3xl">Description</h2>
         <h3 className="text-left text-slate-500 text-2xl indent-2">{selectedProject.description}</h3>
      </div>
      <div className="mb-4">
         {
            !showInput && <button type="button" className='px-4 py-2 bg-zinc-700 rounded-md text-white' onClick={handleClick}>Add Task</button>
         }
         
         {
            showInput && <>
               <Input type="text" id="title" name="title" label="Task Title" ref={taskRef} />
               <button type="button" className='px-4 py-2 bg-green-300 rounded-md ml-2 hover:bg-green-400' onClick={handleAddTask}>Save</button>
               <button type="button" className='px-4 py-2 bg-red-300 rounded-md ml-2 hover:bg-red-400' onClick={handleClick} >Cancel</button>
            </>
         }
      </div>
   </div>
   
})

export default ProjectDetails