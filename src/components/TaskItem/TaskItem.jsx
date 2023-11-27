import React, { useState } from "react";
import "./taskItem.css";

const TaskItem = ({ tarea, onCompleteTask, onDeleteTask }) => {
  const { completada, id, title, desc } = tarea;
  const [isCompleted, setCompleted] = useState(completada);
  const [taskDescription, setTaskDescription] = useState(desc);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onCompleteTask(id);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <li>
      <span className={`${isCompleted ? "completado" : ""}`}>{title}</span>
      <textarea
        name="desc"
        id="desc"
        value={taskDescription}
        onChange={handleDescriptionChange}
      />
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

