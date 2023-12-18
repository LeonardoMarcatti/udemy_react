import React, {useRef} from "react";
import Button from "./UI/Button";
import Task from "./Task";
import Modal from "./Modal";

const btnClass = 'px-6 py-2 rounded-md text-gray-100 font-bold bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 hover:text-stone-100'

const SelectedProject = (props) => {
   const {project, onDelete, onAddTask, onDeleteTask, tasks} = props
   const dangerModal = useRef()
   const formattedDate = new Date(project.dueDate).toLocaleDateString('pt-BR', {timeZone: 'UTC'})

   const showModal = () => {
      dangerModal.current.open()
   }

   return <div>
         <Modal ref={dangerModal} btnText="Yes" onDelete={onDelete} id={project.id}>
            <h2 className="text-5xl font-bold text-white my-4 uppercase">Attention</h2>
            <p className="text-white mb-4">Do you really want to delete this?</p>            
         </Modal>
      <header className="w-[35rem] mt-16 pb-4 mb-4 border-b-2 border-stone-300">
         <div className="flex item-center justify-between">
            <h1 className="text-3sl fold-bold mb-2 text-stone-600">{project.title}</h1>
            <Button className={btnClass} onClick={showModal} >Delete</Button>   
         </div>
         <p className="mb-4 text-stone-400">{formattedDate}</p>
         <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} id={project.id}/>
   </div>
}

export default SelectedProject