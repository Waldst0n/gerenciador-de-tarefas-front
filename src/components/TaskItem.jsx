import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <h2>{task.isCompleted ? 'Completed' : 'Pending'}</h2>
        </>
    )
}

export default TaskItem
