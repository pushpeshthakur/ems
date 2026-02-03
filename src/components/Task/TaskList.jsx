import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";


const TaskList = ({data}) => {
    
    return (
        <div id="TaskList" className='flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[65%] w-full mt-10 rounded-xl py-5'>
            {data.tasks.map((elem, idx) => {

                if(elem.newTask){
                    return <NewTask data={elem} key={idx} />

                }
                if(elem.active){
                    return <AcceptTask data={elem} key={idx} />
                }
                if(elem.completed){
                    return <CompleteTask data={elem} key={idx} />

                }
                if(elem.failed){
                    return <FailedTask data={elem} key={idx} />
                }
                return null;
            })}

                

             
 
                  
            
        </div>
    )
}

export default TaskList;