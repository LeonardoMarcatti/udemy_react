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


   return {state, createProject, saveProject, cancelProject , selectProject}
}

export default useManagerState