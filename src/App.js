import './App.css';
import { useState, useEffect } from 'react';

import TaskItem from './components/TaskItem';
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            description: 'Estudar Programação',
            isCompleted: false,
        },
        {
            id: 2,
            description: 'Ler',
            isCompleted: true,
        },
    ]);

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
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
