import React, { useState } from 'react';
import './taskItem.css'

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setCompleted] = useState(tarea.completada);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(tarea.id);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {tarea.nombre}
        <button onClick={handleComplete}>Completada</button>
        <button onClick={() => onDeleteTask(tarea.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;