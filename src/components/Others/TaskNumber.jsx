import React from "react";

const TaskNumber = ({data}) => {
    return (
        <div className="flex justify-between mt-10 gap-5 screen ">
            <div className="rounded-xl bg-red-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl bg-blue-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
                <h3 className="text-xl font-medium">Accepted Task</h3>
            </div>
            <div className="rounded-xl bg-green-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className="rounded-xl bg-yellow-400 p-10 w-[45%]">
                <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
        </div>
    )
}
export default TaskNumber;