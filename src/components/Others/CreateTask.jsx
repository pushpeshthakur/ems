import React from "react";

const CreateTask = () => {
    return (
       <div className='bg-[#2c2c2c] p-4 rounded-xl mt-8 rounded-xl'>
        <form className="flex flex-wrap w-full items-start justify-between p-2 gap-6">
            <div className='w-1/2 flex flex-col gap-4'>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Task title" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="date" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Employee name</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Assignee name" />
                </div>
                <div>
                    <h3 className="text-gray-300 text-sm mb-0.5">Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-1 bg-transparent border-gray-600' type="text" placeholder="Design, development, etc." />
                </div>
            </div>
            
            <div className='w-2/5 flex item-start flex-col'>
                <h3 className="text-gray-300 text-sm mb-0.5">Description</h3>
                <textarea className='w-full h-44 text-sm py-1 px-2 rounded outline-1 bg-transparent border-gray-600' placeholder="Task description" rows="4"></textarea>
                <button className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded text-sm mt-4">Create Task</button>
            </div>
            
        </form>
       </div>
    )
}

export default CreateTask;