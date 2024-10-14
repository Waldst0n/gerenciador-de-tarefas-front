import axios from 'axios';
import React, { useEffect, useState } from 'react';

import TaskItem from './TaskItem';

import './Tasks.scss';
import AddTask from './AddTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
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
                <AddTask fetchTasks={fetchTasks} />
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem task={lastTask} fetchTasks={fetchTasks} />
                        ))}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas Concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTasks) => (
                            <TaskItem
                                task={completedTasks}
                                fetchTasks={fetchTasks}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
