// import NewProject from "./components/NewProject"
import { useState } from "react"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectSidebar from "./components/ProjectSidebar"
import NewProject from "./components/NewProject"
import SelectedProject from "./components/SelectedProject"


function App() {

  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: []
  })


  const selectProjectHandler = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      }
    })
  }

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
          ID: Math.random()
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

  const selectedProjectDelation = (id) => {
    setProjectState((prevState) => {

      return {
        ...prevState, 
        projects: prevState.projects.filter((project) => project.ID !== id),
        selectedProject: undefined
      }
    })
  }

  const selectiveProject = projectState.projects.find((project) => project.ID === projectState.selectedProject)

  let content = <SelectedProject project={selectiveProject} onDeleteOps={selectedProjectDelation}/>;

  if(projectState.selectedProject === null){
    content = <NewProject onSave={storeProjectData} onCancel={formCancelHandler}/>
  }else if(projectState.selectedProject === undefined){
    content = <NoProjectSelected onStartAddProject={selectedProjectHandler}/>
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={selectProjectHandler} onStartAddProject={selectedProjectHandler} projects={projectState.projects}/>
      {content}
    </main>
  )
}

export default App
