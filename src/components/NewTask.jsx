/* eslint-disable react/prop-types */
import { useState } from "react"

export default function NewTask({onAdd}) {
    const [task, setTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const taskHandler =()=>{
        onAdd(task)
        setTask('')
    }
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={task} onChange={handleChange}/>
      <button className="text-stone-700 hover:text-stone-950" onClick={taskHandler}>Add Task</button>
    </div>
  )
}
