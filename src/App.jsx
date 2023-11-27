import React, { useState, useEffect } from "react";
import { TaskList, TaskForm } from "./components";
import "./app.css";

const App = () => {
  const obtenerTareasDesdeLocalStorage = () => {
    const tareasAlmacenadas = localStorage.getItem("tareas");
    return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : [];
  };

  const [tareas, setTareas] = useState(obtenerTareasDesdeLocalStorage);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log("Tareas actualizadas", tareas);
  }, [tareas]);

  const handleCompleteTask = (tareaId) => {
    setTareas((prevTasks) =>
      prevTasks.map((tarea) =>
        tarea.id === tareaId
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const handleDeleteTask = (tareaId) => {
    setTareas((prevTasks) => prevTasks.filter((tarea) => tarea.id !== tareaId));
  };

  const handleAddTask = (tareaNombre, tareaDescripcion) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      nombre: tareaNombre,
      descripcion: tareaDescripcion,
      completada: false,
    };
    setTareas((prevTasks) => [...prevTasks, nuevaTarea]);
  };

  return (
    <div className="todo-container">
      <h1>Administrador de tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tareas={tareas}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
