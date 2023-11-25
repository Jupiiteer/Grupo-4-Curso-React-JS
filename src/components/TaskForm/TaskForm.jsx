import React, { useState } from "react";
import "./taskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        className="input-task"
        type="text"
        placeholder="Añade una nueva tarea o buscar..."
        value={nuevaTarea}
        onChange={handleInputChange}
      />
      <button className="submit-button " type="submit">
        Añadir tarea
      </button>
    </form>
  );
};

export default TaskForm;
