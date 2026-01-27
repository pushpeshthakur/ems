import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">Hello <br></br><span className="text-3xl font-semibold">Pushpesh</span></h1>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold">Log Out</button>
        </div>
    )
}

export default Header;    
