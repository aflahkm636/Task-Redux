import { configureStore } from "@reduxjs/toolkit";
import todoLIst from "./todoSlice"

export const todostore= configureStore({
    reducer:{
     todolist:todoLIst
    }
})