import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { TodoType } from '../types/Types';


interface TodoProps {
    todoProps: TodoType
}


const Todo = ({todoProps}:TodoProps) => {

    const {id,content} = todoProps;


  return (
    <div className='add-todo'>
        <div>{content}</div>
        <div>
            <FaEdit className='icon'/>
            <CiCircleRemove className='icon'/>
        </div>
    </div>
  )
}

export default Todo