import React, { useState } from 'react';

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const marcarCompletada = (index) => {
    const tareasActualizadas = tareas.map((tarea, i) => (
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    ));
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            onClick={() => marcarCompletada(index)}
            style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
