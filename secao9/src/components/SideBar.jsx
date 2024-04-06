import React from "react";
import Button from "./UI/Button";

const SideBar = (props) => {
   const {onStartAddProject, projects, onSelectProject, id} = props
   return (
      <>
         <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <Button onClick={onStartAddProject} className="px-3 py-1 rounded-md border-stone-300 bg-stone-500 text-stone-100">Add Project</Button>
            <ul className="mt-8">
               {
                  projects.map(el => {
                     let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 bg-stone-800 text-stone-100 hover:text-stone-900 hover:bg-stone-300"

                     if (id == el.id) {
                        cssClasses = "w-full text-left px-2 py-1 border-red-300 outline-red-300 rounded-sm my-1 bg-stone-300 text-stone-900"
                     }

                     return <li key={el.id}>
                        <button type="button" onClick={() => onSelectProject(el.id)} className={cssClasses}>{el.title}</button>
                        </li>
                  })
               }
            </ul>
         </aside>
      </>
   )
}

export default SideBar