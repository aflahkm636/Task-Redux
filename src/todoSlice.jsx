import { createSlice } from "@reduxjs/toolkit";

 const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers: {           
    addTodo: (state, action) => {
    state.todos.push({
    todo: action.payload,
  });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((_,index) => index !== action.payload);
    },
  },
 })


 export const {addTodo,removeTodo} = todoSlice.actions;
 export default todoSlice.reducer;