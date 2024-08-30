import { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';


interface TodoProps {
    todoProps: TodoType
}


const Todo = ({todoProps}:TodoProps) => {

    const {id,content} = todoProps;

    const dispatch = useDispatch()

    const [editable,setEditable] = useState<boolean>(false)

    const [newTodo,setNewTodo] = useState<string>(content)

const handleRemoveTodo =() => {
    dispatch(removeTodoById(id))
} 
const handleUptadeTodo = () => {
    const payload= {
        id:id,
        content:newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)

}


  return (
    <div className='add-todo'>
        <div>
            {editable ? <input style={{border:"none",outline:"none",borderBottom:"1px solid black",width:"100%"}} type="text"value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} /> : <div>{content}</div>}
        </div>
        <div>
            { editable ? <CiCircleCheck className='icon' onClick={handleUptadeTodo}/> : <FaEdit     className='icon' onClick={()=> setEditable(!editable)} /> }
            
            <CiCircleRemove onClick={handleRemoveTodo}  className='icon'/>
        </div>
    </div>
  )
}

export default Todo