import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./taskItem.css";

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const { completada, id, title, desc} = tarea;
  const [isCompleted, setCompleted] = useState(completada);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(id);
  };

  return (
      <li>
        <h2 className={`${isCompleted ? "completado" : ""}`}>{title}</h2>
        <p name="desc" id="desc">
          {desc}
        </p>
        <button className={`${isCompleted ? "complete" : "no-complete"}`} onClick={handleComplete}>
          {`${isCompleted ? "COMPLETADO" : "NO COMPLETADO"}`}
        </button>
        <button className="delete" onClick={() => onDeleteTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
    </li>
  );
};

export default TaskItem;
