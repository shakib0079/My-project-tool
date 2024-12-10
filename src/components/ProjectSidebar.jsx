/* eslint-disable react/prop-types */
import Button from "./Button";

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject, selectedProject}){

    // console.log(onSelectProject)
    console.log(selectedProject)
    return(
        <aside className="w-1/3 bg-stone-900 py-16 px-8 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold md:text-xl uppercase text-stone-200">Your Project</h2>
            <div>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
            {projects.map((project) => {
                let cssCls = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                if(selectedProject === project.ID){
                    cssCls += "text-stone-200 bg-stone-800"
                }else{
                    cssCls += "text-stone-400"
                }

                return(
                    <li key={project.ID} onClick={() => onSelectProject(project.ID)}><button className={cssCls}>{project.title}</button></li>
                )
            })}
            </ul>
        </aside>
    );
}