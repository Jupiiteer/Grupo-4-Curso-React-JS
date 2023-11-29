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
<<<<<<< HEAD
      setMensajeError(`Por favor, escribe una tarea y una descripción.`);
=======
      setMensajeError("Por favor, escribe una tarea y una descripción.");
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
      setTimeout(() => {
        setMensajeError("");
      }, 5000);
      return;
    }
    const newTarea = {
      title,
<<<<<<< HEAD
      desc,
=======
      desc
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
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
<<<<<<< HEAD
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
=======
    <div>
      <input
        type="text"
        placeholder="Buscar tarea"
        value={newTarea.title}
        onChange={handleInputChange}
      />

      <button className="boton-agregar" onClick={openModal}>Agregar tarea</button>

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
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
    </>
  );
};

export default TaskForm;