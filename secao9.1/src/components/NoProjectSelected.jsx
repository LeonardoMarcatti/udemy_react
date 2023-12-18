import React from "react";
import noProjectImage from '../assets/no-projects.png'
import Button from "./UI/Button";

const NoProjectSelected = (props) => {
   const {onStartAddProject} = props
   return <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} alt="it is empty" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">Nothing Now</h2>
      <p className="text-stone-400 mb-4">Select a project or start a new one</p>
      <Button type="button" className="px-3 py-1 rounded-md border-stone-300 bg-stone-500 text-stone-100" onClick={onStartAddProject}>Create New Project</Button>
   </div>
   
}

export default NoProjectSelected