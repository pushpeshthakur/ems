import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
    return (
       <div className="p-10 bg-[#1c1c1c] h-screen text-white">
        <Header />
        <CreateTask />
        <AllTask />
       </div>
    )
}

export default AdminDashboard;