import React, { useState } from 'react'
import { useEffect } from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/Task';

const TaskListComponent = () => {

  const style = {
    loadingStyle : {
      color: 'grey',
      fontSize: '30px',
      fontWaight: 'bold',
    }
  }

  const defaultTask1 = new Task('Example1', 'Default description', true, LEVELS.NORMAL );
  const defaultTask2 = new Task('Example2', 'Default description', false, LEVELS.URGENT );
  const defaultTask3 = new Task('Example3', 'Default description', false, LEVELS.BLOKING );

  const [tasks,setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    console.log('Task state has been modified')
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    
    return() => {
      console.log('Task component id going to unmount')
    }  

  })

  function completeTask ( task ){
    console.log('Complete this task', task)
    const index = tasks.indexOf(task);
    const tempTask = [...tasks]
    tempTask[index].completed = !tempTask[index].completed

    //We update the state of the component ans it will update the
    //iteration of the tasks in order to show the task updated

    setTasks(tempTask)

  }

  function deleteTask(task){
    console.log('Delete this task', task)
    const index = tasks.indexOf(task);
    const tempTask = [...tasks]
    tempTask.splice(index,1)
    setTasks(tempTask)
  }

  function addTask(task){
    console.log('Delete this task', task)
    const tempTask = [...tasks]
    tempTask.push(task)
    setTasks(tempTask)
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: Iterar lista de tareas */ }
          {tasks.map((task,index) => {
            return <TaskComponent 
                      key={index} 
                      task={task} 
                      complete={completeTask}
                      remove={deleteTask}
                    />
          })}
        </tbody>
      </table>
    )
  }

  let taskTable;

  if (tasks.length > 0){
    taskTable = <Table></Table>
  }else{
    taskTable = (<div>
    <h3> Therea are no tasks to show</h3>
    <h4>Please, create one</h4>
    </div>
    )
  }

  return (
    <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your Tasks:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', height: '400px'}}>
            { loading ? <p style={style.loadingStyle}>Loading task ...</p> : taskTable}
          </div>
        </div>
        <TaskForm
          add={addTask}
          length={tasks.length}
        />           
    </div>
  )
}

export default TaskListComponent