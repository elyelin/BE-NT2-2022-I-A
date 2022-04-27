import React from "react";
import '../styles/TodoItem.css'

function TodoItem({completed, onDelete, onCompleted, text}) {
  return (
    <li className="TodoItem">
      {/* <span>C</span>
          <p>{props .text}</p>
          <span>X</span>
          className="todo-checkbox"
           className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            checked onChange={() => {console.log("input")}
            checked="checked"
           */}
          {/* si mi componente recibe una propiedad que se llame completed entonces pinto el boton  */}
      <input name={text} className={`Icon Icon-check ${completed && 'Icon-check--active'}`}  type={"checkbox"} onChange={onCompleted} checked={completed}/>
      <span className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</span>
      <button className="todo-delete" onClick={onDelete}>X</button>
    </li>
  );
}

export { TodoItem };
