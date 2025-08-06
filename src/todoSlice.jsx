import { createSlice } from "@reduxjs/toolkit";

 const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers: {           
    addTodo: (state, action) => {
      const newTodo = {
        todo: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_,index) => index !== action.payload);
    },
  },
 })


 export const {addTodo,removeTodo} = todoSlice.actions;
 export default todoSlice.reducer;