import React, { useState } from "react";
import "./taskItem.css";

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const { completada, id, nombre } = tarea;
  const [isCompleted, setCompleted] = useState(completada);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(id);
  };

  return (
    <li>
      <span className={`${isCompleted ? "completado" : ""}`}> {nombre} </span>
      <button className={`${isCompleted ? "complete" : "no-complete"}`} onClick={handleComplete}>
      {`${isCompleted ? "COMPLETADO" : "NO COMPLETADO"}`}
      </button>
      <button className="delete" onClick={() => onDeleteTask(id)}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
