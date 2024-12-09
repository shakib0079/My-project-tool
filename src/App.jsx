// import NewProject from "./components/NewProject"
import { useState } from "react"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectSidebar from "./components/ProjectSidebar"
import NewProject from "./components/NewProject"


function App() {

  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })

  const selectedProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      }
    })
  }

  const storeProjectData = (project) => {
      
      setProjectState((prevState) => {
        const newProject = {
          ...project,
          ID: new Date()
        }

        return {
          ...prevState,
          projects: [...prevState.projects, newProject],
          selectedProject: undefined
        }
      })
  }

  const formCancelHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    })
  }

  console.log(projectState);

  let content;

  if(projectState.selectedProject === null){
    content = <NewProject onSave={storeProjectData} onCancel={formCancelHandler}/>
  }else if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={selectedProjectHandler}/>
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={selectedProjectHandler} projects={projectState.projects}/>
      {content}
    </main>
  )
}

export default App
