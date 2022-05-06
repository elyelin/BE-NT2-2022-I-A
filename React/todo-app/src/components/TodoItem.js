import React from "react";
import '../styles/TodoItem.css'
 //
function TodoItem({todo, onDelete, togleOnCompleted}) {

  const onCompleteF = () => {
    togleOnCompleted({...todo, completed: !todo.completed})
   }

  return (
    <li className="TodoItem">
      {/* <span>C</span>
          <p>{props .text}</p>
          <span>X</span>
          className="todo-checkbox"
           className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            checked onChange={() => {console.log("input")}
            checked="checked"onClick={onCompleted}
            /onChange={onCompleted} checked={completed}
           */}
          {/* si mi componente recibe una propiedad que se llame completed entonces pinto el boton  */}
      <input name={todo.text} className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}`} type={"checkbox"}  
      checked={todo.completed} onChange={onCompleteF} />
      <span className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}</span>
      <button className="todo-delete" onClick={onDelete}>X</button>
    </li>
  );
}

export { TodoItem };
