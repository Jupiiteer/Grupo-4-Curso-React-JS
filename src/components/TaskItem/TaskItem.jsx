import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck  } from '@fortawesome/free-solid-svg-icons';
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
      <div>
        <h2 className={`${isCompleted ? "completado" : ""}`}>{title}</h2>
        <textarea 
          name="desc"
          id="desc"
          value={isCompleted ? "" : taskDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <button className={`${isCompleted ? "complete" : "no-complete"}`} onClick={handleComplete}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="delete" onClick={() => onDeleteTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>    
    </li>
  );
};

export default TaskItem;