import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./taskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [newTarea, setNewTarea] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const newTarea = {
      title,
      desc,
      id: uuidv4(),
    };

    if (newTarea.title.trim() === "") {
      setMensajeError("Por favor, escribe una tarea.");
      setTimeout(() => {
        setMensajeError("");
      }, 5000);
      return;
    }

    onAddTask(newTarea);
    setNewTarea("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        className="input-task"
        type="text"
        id="title"
        name="title"
        placeholder="Busca o añade una tarea..."
        value={newTarea.title}
      />
      <textarea
        name="desc"
        id="desc"
        className="input-desc"
        value={newTarea.desc}
        placeholder="Descripción de la tarea"
      ></textarea>
      <button className="submit-button " type="submit">
        Añadir tarea
      </button>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
    </form>
  );
};

export default TaskForm;
