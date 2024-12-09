/* eslint-disable react/prop-types */
import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onSave, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const saveBtnHandler = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;


        onSave({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex gap-4 justify-end items-center">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={saveBtnHandler}>Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input type="text"  ref={description} label="Description" textarea/>
                <Input type="date"  ref={dueDate} label="Due Date" />
            </div>
        </div>
    );
}