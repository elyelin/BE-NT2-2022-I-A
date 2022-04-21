import './App.css';
import NewTodo from './components/newTodo';
import Button from './components/button'

function App() {
const callbBckButton = () => {
  console.log('F')
}

//3 estados, tareas, cantidad de tareas, teras pendientes, eventos, eventos de array 
//por cada elemento del array renderizo el componente de todo STATE
  return (
    <div className="container center">
      <h1 className='center title'>TODO App</h1>

      <div className='flow-right controls'>
        <span>Cantidad de Todos: 3 </span>
        <span>Todos pendientes: 3</span>
      </div>

<Button callBack={callbBckButton}/>
<ul className='todo-list'>
  <NewTodo/>
 <NewTodo/>
 <NewTodo/>
</ul>
 

    </div>
  );
}

export default App;
