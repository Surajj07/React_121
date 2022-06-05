import React from 'react'
import { useState } from 'react'

const TodoInput = () => {
    const [text,setText]=useState("")

    const dispatch=useDispatch()
  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="add a task"/>
      <button onClick={()=>{}}>ADD</button>
    </div>
  )
}

export default TodoInput
