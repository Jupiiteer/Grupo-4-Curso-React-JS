import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añade una nueva tarea"
        value={nuevaTarea}
        onChange={handleInputChange}
      />
      <button type="submit">Añadir tarea</button>
    </form>
  );
};

export default TaskForm;