import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TaskItem from './TaskItem';

import './tasks.scss';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (url) => {
        try {
            const { data } = await axios.get('http://localhost:8000/tasks');
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
