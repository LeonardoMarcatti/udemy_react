import React, {memo} from "react";

const ProjectDetails = memo(function ProjectDetails({projects, projectID}) {
   const selectedProject = projects.find(el => el.id == projectID)
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
   </div>
   
})

export default ProjectDetails