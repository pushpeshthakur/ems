import React from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const AllTask =() => {

    const [userData,setUserData] = useContext(AuthContext)

    return(

        <div className='bg-[#2c2c2c] p-5 rounded-xl mt-5 '>
            <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between '>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>

            </div>

            <div className='bg-[#2c2c2c] p-5 rounded-xl mt-5 '>

                {userData && userData.employees && userData.employees.map((elem, idx) => {
                    return <div key={idx} className='border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between '>
                        <h2 className='w-1/5 '>{elem.name}</h2>
                        <h3 className='w-1/5 text-purple-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-green-400'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-blue-400'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
                        </div>
                
                })}
            
            

            </div>
            
        </div>

        
    )
}

export default AllTask;