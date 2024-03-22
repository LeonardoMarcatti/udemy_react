import React, {useState} from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject"

const App = () => {
  const [projectState, setProjectState] = useState({selectedProjectID: undefined, projects:[], tasks: []})

  const handleStartProject = () => {
    setProjectState(prevState => {
      const newState = {...prevState}
      newState.selectedProjectID = null
      return newState
    })
  }

  const handleCancel = () => {
    setProjectState(prevstate => {
      const newState = {...prevstate}
      newState.selectedProjectID = undefined
      return newState
    })
  }

  const selectedProject = projectState.projects.find(project => project.id == projectState.selectedProjectID)

  const handleSelectProject = (id) => {
    setProjectState(prevstate => {
      const newState = {...prevstate}
      newState.selectedProjectID = id
      return newState
    })
  }

  const handleDelete = (id) => {
    setProjectState(prevState => {
      const oldState = {...prevState}
      oldState.selectedProjectID = undefined
      oldState.projects = oldState.projects.filter(el => el.id != id)
      return oldState
    })
  }

  const handleAddProject = (data) => {
    setProjectState(prevState => {
      const newState = {...prevState}
      const newProject = {...data, id: Math.random()}
      newState.projects = [newProject, ...newState.projects]
      return newState
    })
  }

  const addTask = (e) => {
    setProjectState(prevState => {
      const newState = {...prevState}
      const newTasks = [...newState.tasks]
      const newTask = {text: e, id: Math.random(), projectID: prevState.selectedProjectID}
      newState.tasks = [newTask, ...newTasks]
      return newState
    })
  }

  const deleteTask = (e) => {
    setProjectState(prevState => {
      const newState = {...prevState}
      const taskList = [...newState.tasks]
      const filteredTasks = taskList.filter(el => el.id != e)
      newState.tasks = filteredTasks
      return newState
    })
  }

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={addTask} onDeleteTask={deleteTask} tasks={projectState.tasks}/>

  if (projectState.selectedProjectID === null) {
    content = <NewProject getBack={handleCancel} onAdd={handleAddProject} onCancel={handleCancel}/>
  } else if(projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }

  return (
    <main className="h-screen flex gap-8">
      <SideBar onStartAddProject={handleStartProject} projects={projectState.projects} 
        onSelectProject={handleSelectProject} id={projectState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;