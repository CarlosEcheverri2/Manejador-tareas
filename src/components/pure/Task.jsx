import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { useEffect } from 'react'
import '../../style/task.css'
import { ToggleOn } from 'react-bootstrap-icons'
import { ToggleOff } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
import { LEVELS } from '../../models/level.enum'

const TaskComponent = ({ task, complete, remove}) => {

    const style = {
        taskComplete:{
            color:'gray',
            textDecoration:'line-through',
        },
        taskPending:{
            color:'tomato',
            fontWeight:'bold',
        }
    }

    useEffect(() => {
        console.log('Created task')
        return()=> {
            console.log(`Task: {task.name} is going to unmount`)
        }
    },[task])

    const taskLevelBadge=()=>{
        switch (task.level) {
            case LEVELS.NORMAL:
                
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.URGENT:
                            
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.BLOKING:
                            
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
        
            default:
                break;
        }
    }

    const taskIconCompleted = () =>{
        if(task.completed){
            return <ToggleOn className='task-action' onClick={()=>{complete(task)}} color='green' size={20}/>
        }
        else{
            return <ToggleOff className='task-action'  onClick={()=>{complete(task)}} color='grey' size={20}/>
        }
    }

  return (
        <tr className='fw-normal' style={task.completed ? style.taskComplete: style.taskPending}>
            <td>
                <span className='ms-2'>{task.name}</span> 
            </td>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            {/* TODO: Sustituir por un badge */}
            <td className='align-middle'>
                <span>{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <Trash className='task-action' color='tomato' size={20} onClick={()=> remove(task)}/>
            </td>
        </tr>
        
    // <div>
    //     <h2 className='task-name'>
    //         Nombre: { task.name }
    //     </h2>
    //     <h3>
    //         Descripcion: { task.description }
    //     </h3>
    //     <h4>
    //         Level: { task.level }
    //     </h4>
    //     <h5>
    //         This task is: { task.completed ? 'COMPLETED':'PENDING' }
    //     </h5>
    // </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent