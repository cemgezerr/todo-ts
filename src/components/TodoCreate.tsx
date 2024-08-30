import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types'

const TodoCreate = () => {

  const dispatch = useDispatch()

  const [newTodo,setNewTodo] = useState("")


  const handleCreateTodo = () => {
    if(newTodo.trim().length == 0){
      alert("todo giriniz")
      return;}
      const payload: TodoType ={
        id: Math.floor(Math.random() * 99999999),
        content : newTodo
      }
      dispatch(createTodo(payload))
      setNewTodo("")
  }
  

  return (
    <div className='todo-create'>
        <input value={newTodo} onChange={e=> setNewTodo(e.target.value)} className='todo-input' type='text' placeholder='todo giriniz ' />
        <button onClick={handleCreateTodo} className='todo-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate