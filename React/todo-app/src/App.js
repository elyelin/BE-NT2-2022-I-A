import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Button } from "./components/button";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoInput } from "./components/TodoInput";

const callbBckButton = () => {
  console.log("F");
};

const DefaultTodos = [
  {
    text: "Primero",
    completed: true
  },
  {
    text: "segundo",
    completed: false
  },
  {
    text: "tercero",
    completed: true
  },
];
function App() {
  const [todos, setTodos] = React.useState(DefaultTodos)
  const [checked, setChecked] = React.useState(false)
  const [cantidad, setCantidad] = React.useState({
    cantidadTodos: todos.length,
    cantidadPendientes: ''
  })
  const pendingTasks = todos.filter((item) => !item.completed)

  //3 estados, tareas, cantidad de tareas, teras pendientes, eventos, eventos de array
  //por cada elemento del array renderizo el componente de todo STATE
  const onChangeComplete = () => {
   setChecked(!checked)
  }
  const onDelete = () => {
    alert("eliminado")
  }
  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter
        total={cantidad.cantidadTodos}
        pendingTasks={pendingTasks.length}/>
        <TodoInput />
        <Button callBack={callbBckButton} />
        <TodoList>
          {
            //  recorro la lista de todos y por cada elemento existente voy a renderizar un componente todoItem
            DefaultTodos.map((todo, index) => { 
             return <TodoItem onCompleted={onChangeComplete} onDelete={onDelete} key={todo.text} text={todo.text} completed={checked}
              />
            })
          }
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
