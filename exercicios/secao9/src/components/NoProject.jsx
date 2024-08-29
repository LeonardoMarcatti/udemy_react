import React, {memo} from "react";
import image from '../../src/assets/no-projects.png'

const NoProject = memo(function NoProject({onStartProject}){
   return <div className="mt-4 text-center w-2/3">
      <img src={image} alt="" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No project selected!</h2>
      <p className="text-stone-400 mb-4">Select a project or start a new one.</p>
      <button type="button" className="mt-8 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-50 hover:text-stone-100 hover:bg-stone-500 hover:text-stone-100" onClick={onStartProject}>Create Project</button>
   </div>
});

export default NoProject