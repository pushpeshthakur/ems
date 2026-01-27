import React from "react";
import Header from "../Others/Header";
import TaskNumber from "../Others/TaskNumber";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = () => {
    return (
        <div className="p-10 bg-[#1c1c1c]  text-white">
        <Header />
        <TaskNumber />
        <TaskList />
        </div>  
    )
}

export default EmployeeDashboard;    