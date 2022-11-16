import React from 'react'
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/Task';

const TaskListComponent = () => {

  const changeState = (id) =>{
    console.log('TODO: cambiar estado de tarea')
  }

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL );

  return (
    <div>
        <div>
            Your Tasks
        </div>
          {/* TODO: Aplicar un map/ para renderizar una lista de tareas */}
          <TaskComponent task={defaultTask}/>

    </div>
  )
}

export default TaskListComponent