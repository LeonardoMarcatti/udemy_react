import React, {memo} from 'react'
import Form from './Form'
import ProjectDetails from './ProjectDetails'

const Main = memo(function Main({projectID, onSaveProject, onCancelProject, projects, onAddTask}) {
   
   return <main className='px-2 py-4 flex flex-row flex-nowrap items-center justify-center'>
      {
         projectID == null && <h2>Select a project or create a new one</h2>
      }

      {
         projectID == 0 && <Form onSaveProject={onSaveProject} onCancelProject={onCancelProject} />
      }

      {
         (projectID != 0 && projectID != null) && <ProjectDetails projects={projects} projectID={projectID} onAddTask={onAddTask}/>
      }
      </main>  
})

export default Main