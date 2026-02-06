import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
    return (
       <div className="p-10 bg-[#1c1c1c]  text-white">
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask />
        <AllTask />
       </div>
    )
}

export default AdminDashboard;