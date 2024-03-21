// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name:'todo',
//     initialState:[],
//     reducers:{
//         addTodoItem:(state,action)=>{
//             state.push(action.payload)
//         }
//     }
// })
// export const {addTodoItem} =todoSlice.actions
// export default todoSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
})
export const {addTodo,deleteTodo} = todosSlice.actions
export const selectTodos = state => state.todos.todos;
export default todosSlice.reducer;