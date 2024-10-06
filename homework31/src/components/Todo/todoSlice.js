import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            state.todos.push({
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                desc: action.payload
            })
        }
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;