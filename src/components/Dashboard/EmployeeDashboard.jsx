import React from "react";
import Header from "../Others/Header";
import TaskNumber from "../Others/TaskNumber";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = (props) => {
    return (
        <div className="p-10 bg-[#1c1c1c]  text-white">
            
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskNumber data={props.data} />
            <TaskList data={props.data} />
        </div>  
    )
}

export default EmployeeDashboard;    