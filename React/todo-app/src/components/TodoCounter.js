import React from "react";
import '../styles/TodoCounter.css'

function TodoCounter({ total, pendingTasks }) {
  return (
    <div className="TodoCounter">
      <h1>TODO App</h1>
      <div className="flow-right controls">
        <span>Cantidad de Todos: {total} </span>
        <span>Todos pendientes: {pendingTasks} </span>
      </div>
    </div>
  );
}

export { TodoCounter };
