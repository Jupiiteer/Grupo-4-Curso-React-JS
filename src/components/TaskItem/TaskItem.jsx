import React, { useState } from "react";
import "./taskItem.css";

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const { completada, id, title, desc } = tarea;
  const [isCompleted, setCompleted] = useState(completada);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(id);
  };

  return (
    <li>
      <span className={`${isCompleted ? "completado" : ""}`}> {title} </span>
      <textarea name="desc" id="desc">
        {desc}
      </textarea>
      <button
        className={`${isCompleted ? "complete" : "no-complete"}`}
        onClick={handleComplete}
      >
        {`${isCompleted ? "COMPLETADO" : "NO COMPLETADO"}`}
      </button>
      <button className="delete" onClick={() => onDeleteTask(id)}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
