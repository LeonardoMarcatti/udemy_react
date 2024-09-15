import { useState, useEffect } from "react"

const useManagerState = () => {
   const [state, setState] = useState(() => {
      let savedState = JSON.parse(sessionStorage.getItem("state"));
      if (!savedState) {
         savedState = { projectID: null, projects: [] }
      }
      return savedState
   });

      const createProject = () => {   
         setState(prevState => ({...prevState, projectID: 0}))
      }

      const saveProject = (data) => {
         setState(prevState => {
            const newState = {...prevState}
            const newProjects = [...newState.projects, data]
            newState.projects = newProjects
            return newState
         })
      }

      const cancelProject = () => {
         setState(prevState => ({...prevState, projectID: null}))
      }

      const selectProject = (id) => {
         setState(prevState => {
            const newState = {...prevState}
            newState.projectID = id
            return newState
         })
      }

      useEffect(() => {
         sessionStorage.setItem("state", JSON.stringify(state));
      }, [state])

      const addTask = (data) => {
         setState(prevState => {
            const newState = {...prevState}
            const newProjects = [...newState.projects]
            const id = newProjects.findIndex(el => el.id == newState.projectID)
            const newTask = {data, id: Math.random()}
            newProjects[id] = {...newProjects[id], tasks: [...newProjects[id].tasks, newTask]}
            newState.projects = newProjects
            return newState
         });
      }

   return {state, createProject, saveProject, cancelProject , selectProject, addTask}
}

export default useManagerState