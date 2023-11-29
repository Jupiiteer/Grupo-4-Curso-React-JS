import React, { useState, useEffect } from "react";
import { TaskList, TaskForm } from "./components";
import "./app.css";

const App = () => {
  const obtenerTareasDesdeLocalStorage = () => {
    const tareasAlmacenadas = localStorage.getItem("tareas");
    return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : [];
  };

  const [tareas, setTareas] = useState(obtenerTareasDesdeLocalStorage);
  const [busqueda, setBusqueda] = useState("");
  const [tareasFiltradas, setTareasFiltradas] = useState(obtenerTareasDesdeLocalStorage);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log("Tareas actualizadas", tareas);
  }, [tareas]);

  useEffect(() => {
    const tareasFiltradas = tareas.filter((tarea) =>
      tarea.title.toLowerCase().includes(busqueda.toLowerCase())
    );
    setTareasFiltradas(tareasFiltradas);
  }, [busqueda, tareas]);

  const handleCompleteTask = (tareaId) => {
    setTareas((prevTasks) =>
      prevTasks.map((tarea) =>
        tarea.id === tareaId ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const handleDeleteTask = (tareaId) => {
    setTareas((prevTasks) => prevTasks.filter((tarea) => tarea.id !== tareaId));
  };

  const handleAddTask = (nuevaTarea) => {
    setTareas((prevTasks) => [
      {
        id: prevTasks.length + 1,
        ...nuevaTarea,
      },
      ...prevTasks,
    ]);
  };
  
  const handleSearch = (term) => {
    setBusqueda(term);
  };

  return (
    <div className="todo-container">
      <h1>Administrador de tareas</h1>
      <TaskForm onAddTask={handleAddTask} onSearch={handleSearch} />
      <TaskList
        tareas={tareasFiltradas}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;