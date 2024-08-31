import React, {memo} from "react";

const Aside = memo(function Aside({projects, projectID, onSelectProject}) {   
   
   return <aside className='px-2 py-4 bg-zinc-100 border-r-4 border-stone-200'>
         <h2 className='text-2xl text-center border-b-2 border-stone-400'>Your Projects</h2>
         {
            (projects.length > 0) &&  <ul>
               {
                  projects.map(el => {
                     if (el.id == projectID) {
                        return <li key={el.id}>
                           <button type="button" className="bg-slate-400 py-4 px-4 my-2 w-full rounded-md border-2 border-slate-600" onClick={() => onSelectProject(el.id)}>{`${el.title}`}</button>
                        </li>
                     }

                     return <li key={el.id}><button type="button" className="bg-slate-400 py-4 px-4 my-2 w-full rounded-md" onClick={() => onSelectProject(el.id)}>{`${el.title}`}</button></li>
                  })
               }
            </ul>
         }

         {
            projects.length == 0 && <h2 className='text-xl text-center mt-8'>No projects yet</h2>
         }
      </aside>
});

export default Aside