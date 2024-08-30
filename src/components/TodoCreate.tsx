import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input className='todo-input' type='text' placeholder='todo giriniz ' />
        <button className='todo-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate