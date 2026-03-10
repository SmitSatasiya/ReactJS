import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import todoReducer from '../Redux/todo/todoSlice'

export const store = configureStore({
    // reducer: {
    //     counter: counterReducer,
    // },
    reducer: todoReducer
})