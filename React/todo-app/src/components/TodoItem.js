import React from "react";
import '../styles/TodoItem.css'
 //
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
            /onChange={onCompleted} checked={completed}
           */}
          {/* si mi componente recibe una propiedad que se llame completed entonces pinto el boton  */}
      <input name={text} className={`Icon Icon-check ${completed && 'Icon-check--active'}`} type={"checkbox"}  checked={completed} onChange={onCompleted} onClick={onCompleted}/>
      <span className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</span>
      <button className="todo-delete" onClick={onDelete}>X</button>
    </li>
  );
}

export { TodoItem };
