import React from 'react'
import '../styles/TodoList.css'

function TodoList(props) {
  return (
//         <ul className='todo-list' {...props.children}>
//  {/*en todolist va el ul que hace toda la lista y adentro cada componente/*} */}
//         </ul>
<section>
    <ul className='TodoList'>
        {props.children}
    </ul>
</section>
    
  )
}

export { TodoList}