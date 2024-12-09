/* eslint-disable react/prop-types */
import Button from "./Button";
import noprojectimg from "../assets/logo.png";

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noprojectimg} className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-500 my-4" >No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p>
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  )
}
