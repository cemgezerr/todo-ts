import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoİnitialState, TodoType } from '../types/Types'


const initialState:TodoİnitialState = {
        todos:[]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
            createTodo : (state:TodoİnitialState,action:PayloadAction<TodoType>) => {
                state.todos = [...state.todos, action.payload]
            }
    }

})


export const {createTodo } = todoSlice.actions

export default todoSlice.reducer