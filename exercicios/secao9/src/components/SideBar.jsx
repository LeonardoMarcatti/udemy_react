import React, {memo} from "react";

const SideBar = memo(function SideBar({onStartProject, list, onHandleSelectID, projectID}) {
   let classes = "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
   const btn_project = 'w-full text-left px-2 py-4 rounded-md my-1 bg-stone-800 text-stone-250 hover:text-stone-200 hover:shadow-md hover:shadow-white'
   
   return <aside className="w-1/3 px-4 py-4 bg-stone-900 text-stone-50 md:w-72 rounded-r-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone 200">Your Porjects</h2>
      <div>
         <button type="button" onClick={onStartProject} className={classes}>Add Project</button>
      </div>
      <ul className="mt-8">
         {
            list.map(el => {
               if (projectID == el.id) {
                  return <li key={el.id}><button type="button" className={`${btn_project} border-2 border-stone-500`} onClick={() => onHandleSelectID(el.id)}>{el.title}</button></li>
               }
               return <li key={el.id}><button type="button" className={`${btn_project}`} onClick={() => onHandleSelectID(el.id)}>{el.title}</button></li>
            
            })

         }
         </ul>
   </aside>
})

export default SideBar