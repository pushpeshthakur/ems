import React, { useState , useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const[newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
            e.preventDefault()

            setNewTask({taskTitle, taskDate, category, taskDescription, active:false, newTask:true, completed:false, failed:false})

            const data = userData.employees

            data.forEach((elem) => {
                if(assignedTo == elem.name){
                    elem.tasks.push(newTask)

                    console.log(elem)
                }
            })
            setUserData(data)

            setTaskTitle('')
            setTaskDate('')
            setAssignedTo('')
            setCategory('')
            setTaskDescription('')


        }


    return (       

       <div className='bg-[#2c2c2c] p-4 rounded-xl mt-8 rounded-xl'>
        <form onSubmit = {(e) => {
            submitHandler(e)
        }}
        className="flex flex-wrap w-full items-start justify-between p-2 gap-6">
            <div className='w-1/2 flex flex-col gap-4'>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Task Title</h3>
                    <input 
                    value = {taskTitle}
                    onChange = {(e) => {
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Task title" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Date</h3>
                    <input 
                    value = {taskDate}
                    onChange = {(e) => {
                        setTaskDate(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="date" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Employee name</h3>
                    <input 
                    value = {assignedTo}
                    onChange = {(e) => {
                        setAssignedTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Assigned to" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Category</h3>
                    <input 
                    value = {category}
                    onChange = {(e) => {
                        setCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Design, development, etc." />
                </div>
            </div>
            
            <div className='w-2/5 flex item-start flex-col'>
                <h3 className="text-gray-300 text-sm mb-0.5">Description</h3>
                <textarea 
                value = {taskDescription}
                onChange = {(e) => {
                    setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-1 px-2 rounded outline-1 bg-transparent border-gray-600' placeholder="Task description" rows="4"></textarea>
                <button className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded text-sm mt-4">Create Task</button>
            </div>
            
        </form>
       </div>
    )
}

export default CreateTask;