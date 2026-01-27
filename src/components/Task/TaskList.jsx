import React from "react";

const TaskList = ({}) => {
    
    return (
        <div id="TaskList"className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[65%] w-full mt-10 rounded-xl py-5'>
            <div className='shrink-0 h-full bg-purple-600 w-[300px] p-5 rounded-xl'>
                <div className='flex justify-between items-center mb-5'>
                    <h3 className='bg-red-500 py-2 px-5 rounded-lg text-sm'>High</h3>
                    <h4>26 jan 2026</h4>
                </div>
                <h3 className='text-xl font-medium'>Design new landing page for product X. </h3>
                <p className='mt-2 text-sm'>
                    Ensure it is responsive and user-friendly. This task involves creating a visually appealing and functional landing page for product X.
                </p>
            </div> 

            <div className='shrink-0 h-full bg-green-600 w-[300px] p-5 rounded-xl'>
                <div className='flex justify-between items-center mb-5'>
                    <h3 className='bg-red-500 py-2 px-5 rounded-lg text-sm'>High</h3>
                    <h4>26 jan 2026</h4>
                </div>
                <h3 className='text-xl font-medium'>Design new landing page for product X. </h3>
                <p className='mt-2 text-sm'>
                    Ensure it is responsive and user-friendly. This task involves creating a visually appealing and functional landing page for product X.
                </p>
            </div> 

            <div className='shrink-0 h-full bg-cyan-600 w-[300px] p-5 rounded-xl'>
                <div className='flex justify-between items-center mb-5'>
                    <h3 className='bg-red-500 py-2 px-5 rounded-lg text-sm'>High</h3>
                    <h4>26 jan 2026</h4>
                </div>
                <h3 className='text-xl font-medium'>Design new landing page for product X. </h3>
                <p className='mt-2 text-sm'>
                    Ensure it is responsive and user-friendly. This task involves creating a visually appealing and functional landing page for product X.
                </p>
            </div> 
            
            <div className='shrink-0 h-full bg-yellow-600 w-[300px] p-5 rounded-xl'>
                <div className='flex justify-between items-center mb-5'>
                    <h3 className='bg-red-500 py-2 px-5 rounded-lg text-sm'>High</h3>
                    <h4>26 jan 2026</h4>
                </div>
                <h3 className='text-xl font-medium'>Design new landing page for product X. </h3>
                <p className='mt-2 text-sm'>
                    Ensure it is responsive and user-friendly. This task involves creating a visually appealing and functional landing page for product X.
                </p>
            </div> 
            
        </div>
    )
}

export default TaskList;