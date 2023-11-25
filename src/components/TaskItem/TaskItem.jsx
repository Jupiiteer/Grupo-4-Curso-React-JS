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
    <li className={isCompleted && "completado"}>
      {nombre}
      <button onClick={handleComplete}>Completada</button>
      <button onClick={() => onDeleteTask(id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
