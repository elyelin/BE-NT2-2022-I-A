import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { Button } from "./components/button";
import { TodoItem } from "./components/TodoItem";
import { TodoCounter } from "./components/TodoCounter";
import { TodoInput } from "./components/TodoInput";

const DefaultTodos = [
  {
    text: "Primero",
    completed: false,
  },
  {
    text: "segundo",
    completed: false,
  },
  {
    text: "tercero",
    completed: true,
  },
];
function App() {
  const [todos, setTodos] = React.useState(DefaultTodos);
  const [checked, setChecked] = React.useState(false);
  //3 estados, tareas, cantidad de tareas, teras pendientes, eventos, eventos de array
  //por cada elemento del array renderizo el componente de todo STATE
  // const onChangeComplete = () => {
  //  setChecked(!checked)
  // }
  const onCompleteTogle = (todo) => {
    setTodos(todos.map((item, index) => (todo.index === index ? todo : item)));
  };

  const addTodo = () => {
    const title = prompt("nombre todo?");
    if (title) {
      const newTodo = { title, completed: false };
      setTodos([...todos, newTodo]);
    }
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter todos={todos} />
        <TodoInput />
        <Button onClick={addTodo} /> {/* //callBack={callbBckButton}  */}
        <TodoList>
          {
            //  recorro la lista de todos y por cada elemento existente voy a renderizar un componente todoItem
            todos.map((todo, index) => {
              return (
                <TodoItem
                  onCompleted={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  key={index}
                  //text={todo.text}
                  //completed={todo.completed}
                  todo={{ ...todo, index }} 
                  togleOnCompleted={onCompleteTogle}
                />
              );
            })
          }
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
