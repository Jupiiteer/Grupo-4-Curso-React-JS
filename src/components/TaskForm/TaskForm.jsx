import React, { useState } from "react";
import "./taskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevaTarea.trim() === "") {
      setMensajeError("Por favor, escribe una tarea.");
      setTimeout(() => {
        setMensajeError("");
      }, 5000);
      return;
    }
    onAddTask(nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        className="input-task"
        type="text"
        placeholder="Añade una nueva tarea"
        value={nuevaTarea}
        onChange={handleInputChange}
      />
      <textarea
        name="input-desc"
        id="input-desc"
        placeholder="Descripción de la tarea"
        className="input-desc"
      ></textarea>
      <button className="submit-button " type="submit">
        Añadir tarea
      </button>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
    </form>
  );
};

export default TaskForm;
