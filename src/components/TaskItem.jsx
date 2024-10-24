import React from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'

import { AiFillDelete } from 'react-icons/ai'

import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`)

      await fetchTasks()

      alert.success('A tarefa foi removida com sucesso!')
    } catch (_error) {
      alert.error('Erro')
    }
  }

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, {
        isCompleted: e.target.checked
      })

      await fetchTasks()

      alert.success('Tafera modificada com sucesso!')
    } catch (_error) {
      alert.error('Algo deu errado!')
    }
  }

  return (
    <div className='task-item-container'>
      <div className='task-description'>
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input
            type='checkbox'
            checked={task.isCompleted}
            onChange={(e) => handleTaskCompletionChange(e)}
          />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className='delete'>
        <AiFillDelete size={18} color='#f97474' onClick={handleTaskDeletion} />
      </div>
    </div>
  )
}

export default TaskItem
