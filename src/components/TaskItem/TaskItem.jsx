import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
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
      <div className="principal">
        <span className={`${isCompleted ? "completado" : ""}`}> {title} </span>
        <button
          className={`${isCompleted ? "complete" : "no-complete"}`}
          onClick={handleComplete}
        >
          {`${isCompleted ? "COMPLETADO" : "NO COMPLETADO"}`}
        </button>
        <button className="delete" onClick={() => onDeleteTask(id)}>
          <FaRegTrashCan />
        </button>
      </div>
      <p name="desc" id="desc" className="desc">
        {desc}
      </p>
    </li>
  );
};

export default TaskItem;
