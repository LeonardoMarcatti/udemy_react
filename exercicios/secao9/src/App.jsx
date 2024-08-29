import SideBar from "./components/SideBar";
import NoProject from "./components/NoProject";
import NewProject from './components/NewProject'
import React, {useCallback, useState} from 'react'
import SelectedProject from "./components/SelectedProject";

   let filteredProject
   let filteredTasks = []
   
const App = () => {
   const [projectsState, setProjectStates] = useState({selectedProject: undefined, projects: [], tasks: []})
   const handleAddProject = useCallback(() => setProjectStates(prevState => ({...prevState, selectedProject: null})), [])
   const handleCancel =  useCallback(() => setProjectStates(prevState => ({...prevState, selectedProject: undefined})), [])

   if (projectsState.selectedProject) {
      filteredProject = projectsState.projects.find(project => project.id == projectsState.selectedProject)
      filteredTasks = projectsState.tasks.filter(tasks => tasks.projectID == projectsState.selectedProject)
   }

   const addTask = useCallback((task) => {
      setProjectStates(prevState => {
         const newTask = {task: task, taskID: Math.random(), projectID: prevState.selectedProject}
         const newState = {...prevState}
         const newTasks = [...newState.tasks]
         newTasks.unshift(newTask)
         newState.tasks = newTasks
         return newState
      })
   }, [])

   const deleteTask = useCallback((id) => {
      setProjectStates(prevState => {
         const newState = {...prevState}
         const newTasks = [...newState.tasks]
         const filteredTasks = newTasks.filter(el => el.taskID != id)
         newState.tasks = filteredTasks
         return newState
      })
   }, [])

   const handleSaveProject = useCallback((data) => {
      setProjectStates(prevState =>{
         const newState = {...prevState}
         const newProjects = [...newState.projects]
         newProjects.unshift({...data, id: Math.random()})
         newState.projects = newProjects   
         return newState
      })
   }, [])

   const handleSelectID = useCallback((id) => {
      setProjectStates(prevState => {
         const newState = {...prevState}
         newState.selectedProject = id
         return newState
      })
   }, [])

   const handleDelete = useCallback(() => {
      setProjectStates(prevState => {
         const newState = {...prevState}
         const filteredProjects = newState.projects.filter(el => el.id != prevState.selectedProject)
         newState.projects = filteredProjects
         newState.selectedProject = undefined
         return newState
      })
   }, [])

   let content = <SelectedProject project={filteredProject} onDelete={handleDelete} onAddTask={addTask} onDeleteTask={deleteTask} tasks={filteredTasks}/>

   if (projectsState.selectedProject === null) {
      content = <>
         <h1 className="my-2 text-center text-5xl font-bold">New Project</h1>
         <NewProject onHandleCancel={handleCancel} onHandleSaveProject={handleSaveProject}/>
      </>
   }

   if(projectsState.selectedProject === undefined){
      content = <NoProject onStartProject={handleAddProject} />
   }


  return  <div className="flex flex-row h-screen ">

      <SideBar onStartProject={handleAddProject} list={projectsState.projects} onHandleSelectID={handleSelectID} projectID={projectsState.selectedProject}/>
      <main className="gap-8 w-full flex flex-col items-center">
      {content}
      </main>
    </div>
}

export default App;
