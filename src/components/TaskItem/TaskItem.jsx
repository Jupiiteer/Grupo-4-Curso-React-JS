import React, { useState } from "react";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck  } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
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
<<<<<<< HEAD
        <textarea
=======
        <textarea 
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
          name="desc"
          id="desc"
          value={isCompleted ? "" : taskDescription}
          onChange={handleDescriptionChange}
        />
      </div>
<<<<<<< HEAD
      <div className="iconos">
        <button
          className={`${isCompleted ? "complete" : "no-complete"}`}
          onClick={handleComplete}
        >
=======
      <div>
        <button className={`${isCompleted ? "complete" : "no-complete"}`} onClick={handleComplete}>
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className="delete" onClick={() => onDeleteTask(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
<<<<<<< HEAD
      </div>
=======
      </div>    
>>>>>>> 1b3ea80293c7f1c5a5bc9bae5926066b1480f792
    </li>
  );
};

export default TaskItem;