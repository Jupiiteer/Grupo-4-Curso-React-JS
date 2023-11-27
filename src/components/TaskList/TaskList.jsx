import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./taskList.css";

const TaskList = ({ tareas, onCompleteTask, onDeleteTask }) => {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onCompleteTask={() => onCompleteTask(tarea.id)}
          onDeleteTask={() => onDeleteTask(tarea.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;