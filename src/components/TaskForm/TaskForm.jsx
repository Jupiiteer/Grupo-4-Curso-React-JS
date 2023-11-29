import React, { useState } from "react";
import "./taskForm.css";

const TaskForm = ({ onAddTask, onSearch }) => {
  const [newTarea, setNewTarea] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;

    if (title.trim() === "" || desc.trim() === "") {
      setMensajeError(`Por favor, escribe una tarea y una descripción.`);
      setTimeout(() => {
        setMensajeError("");
      }, 5000);
      return;
    }
    const newTarea = {
      title,
      desc,
    };
    onAddTask(newTarea);
    setNewTarea("");
    closeModal();
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Buscar tarea"
          value={newTarea.title}
          onChange={handleInputChange}
        />

        <button className="boton-agregar" onClick={openModal}>
          Agregar tarea
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={handleSubmit} className="input-container">
                <input
                  className="input-task"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Añade una nueva tarea"
                  value={newTarea.title}
                  onChange={(e) => setNewTarea(e.target.value)}
                />
                <textarea
                  name="desc"
                  id="desc"
                  className="input-desc"
                  value={newTarea.desc}
                  placeholder="Descripción de la tarea"
                ></textarea>
                <button className="submit-button" type="submit">
                  Añadir tarea
                </button>
              </form>
              {mensajeError && <p className="error-message">{mensajeError}</p>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskForm;
