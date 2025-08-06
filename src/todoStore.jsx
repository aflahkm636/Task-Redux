import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"

export const todostore= configureStore({
    reducer:{
     todolist:todoReducer
    }
})