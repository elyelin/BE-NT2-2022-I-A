
const input = (prop) => {
    const { data } = prop
    return(
        <div>
     
        <li className='todo-container'>
          <input type={"checkbox"} className='todo-checkbox' />
          <span className=''>{data}</span>
          <button className='todo-delete'>X</button>
        </li>
    
            
        </div>
    )
}

export default input