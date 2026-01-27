import React from "react";

const TaskNumber = ({}) => {
    return (
        <div className="flex justify-between mt-10 gap-5 screen ">
            <div className="rounded-xl bg-red-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl bg-blue-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl bg-green-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl bg-yellow-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
        </div>
    )
}
export default TaskNumber;