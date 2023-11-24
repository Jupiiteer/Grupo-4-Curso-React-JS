import React, { useState } from 'react';
import './taskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = event => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddTask(nuevaTarea);
    setNuevaTarea('');
  };

  return (
    <div className='input-container'>
      <form onSubmit={handleSubmit}>
        <input className='input-task'
          type="text"
          placeholder="Añade una nueva tarea"
          value={nuevaTarea}
          onChange={handleInputChange}
        />
        <button className='submit-button ' type="submit">Añadir tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;