import React  from 'react'
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'
import useManagerState from './hooks/useManageState'

const App = () => {
   const {state, createProject, saveProject, cancelProject , selectProject} = useManagerState()
   
  return <>
      <Header onCreateProject={createProject}/>
      <Aside projects={state.projects} projectID={state.projectID} onSelectProject={selectProject} />
      <Main projectID={state.projectID} onSaveProject={saveProject} onCancelProject={cancelProject} projects={state.projects}/>
      <Footer />
  </>
}

export default App
