import React from 'react'

const TodoList = () => {
    const todos=useSelector((state=>state.todos.todos))
  return (
    <div>
      <h3>todods</h3>
      {
        todos.map(elem=><div key={elem.id}>{elem.todos}</div>)
      }
    </div>
  )
}

export default TodoList
