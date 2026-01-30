import React from "react";
import Header from "../Others/Header";
import TaskNumber from "../Others/TaskNumber";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = ({data}) => {
    return (
        <div className="p-10 bg-[#1c1c1c]  text-white">
            <h1>{data.id}</h1>
            <Header />
            <TaskNumber />
            <TaskList />
        </div>  
    )
}

export default EmployeeDashboard;    