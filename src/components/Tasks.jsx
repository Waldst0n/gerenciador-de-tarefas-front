import axios from 'axios'
import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useAlert } from 'react-alert'

import TaskItem from './TaskItem'

import './Tasks.scss'
import AddTask from './AddTask'

const Tasks = () => {
  const alert = useAlert()

  const [tasks, setTasks] = useState([])

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks')
      setTasks(data)
      // eslint-disable-next-line no-unused-vars
    } catch (_error) {
      alert.error('Não foi possível recuperar as tarefas!')
    }
  }, [alert])

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false)
  }, [tasks])

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted)
  }, [tasks])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  return (
    <div className='tasks-container'>
      <h2>Minhas tarefas</h2>

      <div className='last-tasks'>
        <h3>Últimas tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className='tasks-list'>
          {lastTasks.map((lastTask) => (
            <TaskItem
              key={lastTask._id}
              task={lastTask}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>

      <div className='completed-tasks'>
        <h3>Tarefas Concluídas</h3>
        <div className='tasks-list'>
          {completedTasks.map((completedTasks) => (
            <TaskItem
              key={completedTasks._id}
              task={completedTasks}
              fetchTasks={fetchTasks}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
