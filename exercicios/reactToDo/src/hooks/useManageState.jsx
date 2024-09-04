import { useState, useEffect } from "react"

const useManagerState = () => {
   const [state, setState] = useState(() => {
      let savedState = JSON.parse(localStorage.getItem("state"));
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
         localStorage.setItem("state", JSON.stringify(state));
      }, [state.projects])

      const addTask = (data) => {
         setState(prevState => {
            const newState = {...prevState}
            const newProjects = [...newState.projects]
            const id = newProjects.findIndex(el => el.id == newState.projectID)

            if (typeof(id) == 'number') {
               const newTask = {data, id: Math.random()}
               newProjects[id].tasks.push(newTask)
            }
            return newState
         });
      }
      


   return {state, createProject, saveProject, cancelProject , selectProject, addTask}
}

export default useManagerState