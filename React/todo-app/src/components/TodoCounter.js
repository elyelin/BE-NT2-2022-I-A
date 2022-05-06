import React from "react";
import '../styles/TodoCounter.css'

function TodoCounter({todos}) {

  let itemCount = todos.length
  
  let unChecked = todos.reduce((counter, todo) => {
    return (!todo.completed) ? counter + 1 : counter
  }, 0)

  return (
    <div className="TodoCounter">
      <h1>TODO App</h1>
      <div className="flow-right controls">
        <span>Cantidad de Todos: {itemCount} </span>
        <span>Todos pendientes: {unChecked} </span>
      </div>
    </div>
  );
}

export { TodoCounter };
