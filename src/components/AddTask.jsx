import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useAlert } from 'react-alert';

import CustomInput from './CustomInput';
import Button from './Button';

import './AddTask.scss';

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState('');

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    'A tarefa precisa de uma descrição para ser adicionada'
                );
            }

            await axios.post('http://localhost:8000/tasks', {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            setTask('');

            await alert.success('A tarefa foi adicionada com sucesso!');
        } catch (_e) {
            alert.error('Algo deu Errado');
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value={task}
                onchange={onChange}
                onEnterPress={handleTaskAddition}
            />
            <Button onClick={handleTaskAddition}>
                <FaPlus size={14} color="#fff" />
            </Button>
        </div>
    );
};

export default AddTask;
