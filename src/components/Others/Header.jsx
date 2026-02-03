import React, { useState } from "react";

const Header = (props) => {

    // const[username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }else{ 
    //     setUsername(data.name)

    // }

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        //window.location.reload()
    }
    
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">Hello <br></br><span className="text-3xl font-semibold">username</span></h1>
            <button onClick={logOutUser} className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold">Log Out</button>
        </div>
    )
}

export default Header;    
