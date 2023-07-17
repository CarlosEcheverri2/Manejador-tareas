import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { LEVELS } from '../../../models/level.enum'
import { Task } from '../../../models/task.class'

const TaskForm = ({add, length}) => {

  const style = {
    normalStyle : {
      color:'blue',
      fontWeight:'bold'
    },
    urgentStyle : {
      color:'yellow',
      fontWeight:'bold'
    },
    blockingStyle : {
      color:'tomato',
      fontWeight:'bold'
    },
  }

  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelsRef = useRef(LEVELS.NORMAL)

  function addTask(e){
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelsRef.current.value
    )
    add(newTask)
  }


  return (
    <form onSubmit={addTask}  style={{display:'flex',justifyContent:'center',alignItems:'center', marginBottom:'10px'}}>
      <div className='form-outline'>
        <input type="text" ref={nameRef} id='inputName' required autoFocus placeholder='Task name'/>
        <input type="text" ref={descriptionRef} id='inputDescription' required placeholder='Task description'/>
        <label htmlFor='selectLevel' className=''>Priority</label>
        <select name="" ref={levelsRef} defaultValue={LEVELS.NORMAL} id = 'selectLevel'>
          <option style={style.normalStyle} value={LEVELS.NORMAL}>Normal</option>
          <option style={style.urgentStyle} value={LEVELS.URGENT}>Urgente</option>
          <option style={style.blockingStyle} value={LEVELS.BLOKING}>Bloqueante</option>
        </select>
        <button type='submit' className=''>
          {length > 0 ? 'Add New Task' : 'Create your First Task'}
        </button>
      </div>

    </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm