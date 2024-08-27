import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import NewProject from './components/NewProject'
import React, {useState} from 'react'

const App = () => {
   const [projectsState, setProjectStates] = useState({selectedProject: undefined, projects: [], tasks: []})
   const handleAddProject = () => setProjectStates(prevState => ({...prevState, selectedProject: null}))
   let content = ''

   if (projectsState.selectedProject === null) {
      content = <>
         <h1 className="my-2 text-center text-5xl font-bold">New Project</h1>
         <NewProject />
      </>
   } else {
      content = <NoProject onStartProject={handleAddProject} />
   }

  return  <div className="flex flex-row h-screen ">

      <SideBar onStartProject={handleAddProject} />
      <main className="gap-8 w-full flex flex-col items-center">
      {content}
      </main>
    </div>
}

export default App;
