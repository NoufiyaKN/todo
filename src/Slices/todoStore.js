// import { configureStore } from "@reduxjs/toolkit";
// import todoSlice from "./todoSlice";

// const todoStore = configureStore({
//     reducer:{
//         todoReducer: todoSlice
//     }
// })
// export default todoStore

import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todoSlice';

 const store = configureStore({
  reducer: {
    todos: todosSlice
  },
});
export default store

