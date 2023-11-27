import React, { useState } from "react";
import "./taskItem.css";

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const { completada, id, nombre, descripcion } = tarea;
  const [isCompleted, setCompleted] = useState(completada);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(id);
  };

  return (
    <li>
      <span className={`${isCompleted ? "completado" : ""}`}> {nombre} </span>
      <span className={`${isCompleted ? "completado" : ""}`}>
        {descripcion}
      </span>
      <button className="complete" onClick={handleComplete}>
        {!isCompleted ? "No completado" : "Completado"}
      </button>
      <button className="delete" onClick={() => onDeleteTask(id)}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
