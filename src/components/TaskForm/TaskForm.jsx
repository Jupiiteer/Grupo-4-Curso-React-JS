import React, { useState } from "react";
import "./taskForm.css";

const TaskForm = ({ onAddTask, onSearch }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescripcionTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((nuevaTarea.trim() === "") & (descripcionTarea.trim() === "")) {
      setMensajeError("Por favor, escribe una tarea y añade una descripción");
      setTimeout(() => {
        setMensajeError("");
      }, 5000);
      return;
    }
    onAddTask({
      nombre: nuevaTarea,
      descripcion: descripcionTarea,
    });
    setNuevaTarea("");
    setDescripcionTarea("");
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <form className="input-container">
      <input
        className="input-task"
        type="text"
        placeholder="Buscar o añade una nueva tarea..."
        value={nuevaTarea}
        onChange={handleInputChange}
        onBlur={handleSearch}
      />
      <textarea
        name="input-desc"
        id="input-desc"
        placeholder="Descripción de la tarea"
        className="input-desc"
        value={descripcionTarea}
        onChange={handleDescriptionChange}
      ></textarea>
      <button className="submit-button " type="submit" onClick={handleSubmit}>
        Añadir tarea
      </button>
      {mensajeError && <p className="error-message">{mensajeError}</p>}
    </form>
  );
};

export default TaskForm;
