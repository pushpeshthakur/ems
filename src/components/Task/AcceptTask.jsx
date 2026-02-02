import React from "react";

const AcceptTask = ({data}) => {
    return(
        <div className='shrink-0 h-full bg-purple-600 w-[300px] p-5 rounded-xl'>
                <div className='flex justify-between items-center mb-5'>
                    <h3 className='bg-red-500 py-2 px-5 rounded-lg text-sm'>{data.category}</h3>
                    <h4>{data.date}</h4>
                </div>
                <h3 className='text-xl font-medium'>{data.title} </h3>
                <p className='mt-2 text-sm'>
                    {data.description}
                </p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as failed</button>
                </div>
            </div> 
    )
}

export default AcceptTask